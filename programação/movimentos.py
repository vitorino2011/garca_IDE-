from pybricks.tools import wait

#Cada tipo de movimento.

#KP_STRANGHT == KP_FRENTE
#KP_GIRO == KP_GIRO
#KP_CURVA == KP_CURVA

KP_STRAIGHT = 1.8 # valor de correção para o robô ir para frente;
KP_TURN = 3.2 # valor de correção limite para o robô girar;
KP_CURVE = 2.4 # valor de correção para o robô girar;


def gb_move(gb, hub, distancia, velocidade=300): # 300 == velocidade padrão
    """
    Move o robô em linha reta mantendo o heading inicial.
    
    Exemplo da conta:
        erro = 3° correcao = 3 × 1.8 = 5.4 a correção é proporcional a quantidade de erros.
    """

    gb.reset() # resetar antes de todos os comandos. 

    heading_alvo = hub.imu.heading() # alvo é dado pelo centro do hub 

    direcao = 1 if distancia >= 0 else -1 #distancia: Positivo == frente e Negativo == ré.

    distancia_alvo = abs(distancia)

    while abs(gb.distance()) < distancia_alvo: # correção constante a cada 10 milissegundos. 

        erro = heading_alvo - hub.imu.heading() 
        """para corrigir o erro é pego o valor oposto da direção do robô
         de forma que iguale a zero """

        correcao = erro * KP_STRAIGHT # correção é dada pelo valor do KP da frente.

        gb.drive (velocidade * direcao, correcao)

        wait(10)

    # Desaceleração final reduz a inércia antes da parada.
    passo = max(1, int(abs(velocidade) / 5))

    for velocidade_atual in range(abs(int(velocidade)), 0, -passo):

        erro = heading_alvo - hub.imu.heading()

        correcao = erro * KP_STRAIGHT

        gb.drive(velocidade_atual * direcao, correcao)

        wait(10)

    gb.stop()


def gb_turn(gb, hub, angulo, velocidade_giro=500, tolerancia=1):
    """
    Gira o robô pelo ângulo desejado.

    angulo:
        Positivo -> giro horário.
        Negativo -> giro anti-horário.

    O robô desacelera automaticamente à medida que se aproxima
    do alvo.
    """

    heading_alvo = hub.imu.heading() + angulo

    while True:

        erro = heading_alvo - hub.imu.heading()

        if abs(erro) <= tolerancia:
            break

        velocidade_atual = erro * KP_TURN

        # Limita a velocidade
        if velocidade_atual > velocidade_giro:
            velocidade_atual = velocidade_giro

        elif velocidade_atual < -velocidade_giro:
            velocidade_atual = -velocidade_giro

        gb.drive(0, velocidade_atual)

        wait(10)

    gb.stop()


def _smoothstep(progresso):
    """
    Suaviza a evolução da curva.

    Entrada:
        0.0 -> início
        1.0 -> final

    Exemplo:
        progresso = 0.5
        resultado = 0.5

    Isso evita mudanças bruscas no heading desejado.
    """

    if progresso <= 0:
        return 0.0

    if progresso >= 1:
        return 1.0

    return progresso * progresso * (3 - 2 * progresso)

def gb_curve(gb,hub,distancia,angulo,velocidade=300,tolerancia_final=1,suavizacao=True, timeout_extra_ms=1500):
    """
    Executa uma curva mantendo controle do heading ao longo
    de todo o percurso e faz um ajuste final do ângulo.
    """

    gb.reset()

    heading_inicial = hub.imu.heading()
    heading_final = heading_inicial + angulo

    direcao = 1 if distancia >= 0 else -1
    distancia_alvo = abs(distancia)

    # Sem deslocamento linear: transforma a curva em um giro.
    if distancia_alvo == 0:
        gb_turn(gb,hub,angulo,velocidade_giro=velocidade,tolerancia=tolerancia_final)
        return

    # Estimativa apenas para impedir que um robô travado
    # permaneça no loop indefinidamente.
    tempo_estimado_ms = (distancia_alvo / max(abs(velocidade), 1)) * 1000

    timeout_ms = (tempo_estimado_ms * 3 + timeout_extra_ms)

    max_loops_curva = max(50,int(timeout_ms / 10))

    zona_frenagem = distancia_alvo * 0.25

    velocidade_minima = max(abs(velocidade) * 0.3,50)

    contador_loops = 0

    while abs(gb.distance()) < distancia_alvo:

        distancia_atual = abs(gb.distance())

        progresso = (distancia_atual / distancia_alvo)

        if suavizacao:
            progresso_efetivo = _smoothstep(progresso)
        else:
            progresso_efetivo = progresso

        heading_alvo = (heading_inicial + angulo * progresso_efetivo)

        erro = (heading_alvo - hub.imu.heading())

        correcao = erro * KP_CURVE

        distancia_restante = (distancia_alvo - distancia_atual)

        # Diminui a velocidade nos últimos 25%.
        if distancia_restante < zona_frenagem:

            fator = (
                distancia_restante
                / zona_frenagem
            )

         velocidade_atual = (velocidade_minima + (abs(velocidade) - velocidade_minima)* fator)

        else:
            velocidade_atual = abs(velocidade)

        gb.drive(velocidade_atual * direcao,correcao)

        wait(10)

        contador_loops += 1

        if contador_loops > max_loops_curva:
            break

    gb.stop()

    # Ajusta o heading final independentemente do erro acumulado
    # durante a curva.
    contador_ajuste = 0
    max_loops_ajuste = 150

    while True:

        erro = (heading_final - hub.imu.heading())

        if abs(erro) <= tolerancia_final:
            break

        velocidade_final = erro * KP_TURN

        if velocidade_final > velocidade:
            velocidade_final = velocidade

        elif velocidade_final < -velocidade:
            velocidade_final = -velocidade

        gb.drive(0,velocidade_final)

        wait(10)

        contador_ajuste += 1

        if contador_ajuste > max_loops_ajuste:
            break

    gb.stop()
