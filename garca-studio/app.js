const CATEGORIES = [
  {id:'motors',label:'Motores',color:'#078bff',blocks:[
    ['A executar ↻ por 1 rotações a 500 graus/s','motor_a.run_angle(500, 360)'],['A ir pelo caminho mais curto para posição 0','motor_a.run_target(500, 0)'],['A iniciar motor ↻ a 500 graus/s','motor_a.run(500)'],['A parar motor','motor_a.stop()'],['A definir velocidade para 75%','motor_a_speed = 750'],['A posição','motor_a.angle()','reporter'],['A velocidade','motor_a.speed()','reporter']]},
  {id:'movement',label:'Movimento',color:'#f72ea8',blocks:[
    ['mover ↑ por 10 rotações','robot.straight(1760)'],['iniciar movimento ↑','robot.drive(200, 0)'],['parar de mover','robot.stop()'],['definir velocidade de movimento para 75%','robot.settings(straight_speed=750)'],['definir posição do motor de direção para 0','steering.run_target(500, 0)'],['definir velocidade do motor de direção para 100%','steering.run(1000)'],['definir motores de movimento para A+B','robot = DriveBase(motor_a, motor_b, 56, 112)'],['definir 1 rotação de movimento igual a 17,6 cm','# 1 rotação de movimento = 17,6 cm'],['distância percorrida','robot.distance()','reporter']]},
  {id:'light',label:'Luz',color:'#984bf4',blocks:[
    ['ligar ❤ por 1 segundos','hub.display.icon(Icon.HEART)\nwait(1000)'],['ligar ❤','hub.display.icon(Icon.HEART)'],['escrever A','hub.display.char("A")'],['desligar','hub.display.off()'],['ligar píxel 1 1','hub.display.pixel(0, 0, 100)'],['definir claridade do píxel 1 1 para 75%','hub.display.pixel(0, 0, 75)'],['definir luz central para verde','hub.light.on(Color.GREEN)'],['definir orientação para cima','hub.display.orientation(Side.TOP)'],['girar orientação para ↻','hub.display.orientation(Side.RIGHT)'],['ligar luzes do sensor de distância por 1 segundos','distance.lights.on(100)\nwait(1000)']]},
  {id:'sound',label:'Som',color:'#b752f4',blocks:[
    ['tocar som até o fim','hub.speaker.beep(500, 500)'],['iniciar som','hub.speaker.beep(500, 500)'],['tocar bipe por 0,5 segundos','hub.speaker.beep(500, 500)'],['iniciar bipe','hub.speaker.beep(500)'],['parar todos os sons','# O bipe atual termina automaticamente; nenhum som contínuo ativo'],['adicionar -10 ao efeito tom','# efeito de tom: -10'],['definir efeito tom para 100','# efeito de tom: 100'],['limpar efeitos de som','# efeitos de som limpos'],['adicionar -10 ao volume','hub.speaker.volume(max(0, hub.speaker.volume() - 10))'],['definir volume para 75%','hub.speaker.volume(75)'],['volume','hub.speaker.volume()','reporter']]},
  {id:'events',label:'Eventos',color:'#ffbe0b',blocks:[
    ['quando o programa iniciar','# Programa iniciado'],['quando eu receber mensagem1','# ao receber mensagem1'],['transmita mensagem1','# transmitir mensagem1'],['transmita mensagem1 e espere','# transmitir mensagem1 e esperar'],['A quando a cor é vermelho','# quando color.color() == Color.RED'],['A quando a distância é perto (< 20 cm)','# quando distance.distance() < 200'],['A quando a força é pressionada','# quando force.pressed()'],['quando inclinado para a frente','# quando inclinado para frente'],['quando guinada > 45','# quando hub.imu.heading() > 45'],['quando o botão esquerdo pressionado','# quando Button.LEFT pressionado'],['quando o cronômetro > 1','# quando timer.time() > 1000']]},
  {id:'control',label:'Controle',color:'#ff9914',blocks:[
    ['espere 1 segundos','wait(1000)'],['repita 10','for i in range(10):\n    pass'],['sempre','while True:\n    pass'],['se <> então','if True:\n    pass'],['se <> então / senão','if True:\n    pass\nelse:\n    pass'],['repita até que <>','while not True:\n    pass'],['espere até que <>','while not True:\n    wait(10)'],['pare tudo','raise SystemExit']]},
  {id:'sensors',label:'Sensores',color:'#15c3df',blocks:[
    ['A a cor é vermelho?','color.color() == Color.RED','boolean'],['A cor','color.color()','reporter'],['A luz refletida','color.reflection()','reporter'],['A é mais perto que 20 cm?','distance.distance() < 200','boolean'],['A distância em cm','distance.distance() / 10','reporter'],['A força','force.force()','reporter'],['A pressionado?','force.pressed()','boolean'],['inclinado para a frente?','hub.imu.tilt()[0] > 20','boolean'],['ângulo de guinada','hub.imu.heading()','reporter'],['o botão esquerdo pressionado?','Button.LEFT in hub.buttons.pressed()','boolean'],['orientação para cima?','hub.imu.up() == Side.TOP','boolean'],['cronômetro','timer.time()','reporter'],['zere o cronômetro','timer.reset()']]},
  {id:'operators',label:'Operadores',color:'#0acb72',blocks:[
    ['( ) + ( )','1 + 1','reporter'],['( ) - ( )','1 - 1','reporter'],['( ) * ( )','1 * 1','reporter'],['( ) / ( )','1 / 1','reporter'],['número aleatório entre 1 e 10','randint(1, 10)','reporter'],['( ) > 50','1 > 50','boolean'],['( ) < 50','1 < 50','boolean'],['( ) = 50','1 == 50','boolean'],['<> e <>','True and True','boolean'],['<> ou <>','True or False','boolean'],['não <>','not True','boolean'],['junte maçã banana','"maçã" + "banana"','reporter'],['letra 1 de maçã','"maçã"[0]','reporter'],['comprimento de maçã','len("maçã")','reporter'],['maçã contém a?','"a" in "maçã"','boolean'],['o resto de 11 por 3','11 % 3','reporter'],['arredonde 3,14','round(3.14)','reporter'],['abs de 9','abs(9)','reporter']]},
  {id:'variables',label:'Variáveis',color:'#f730ab',blocks:[
    ['Criar uma variável','minha_variavel = 0'],['mude minha variável para 0','minha_variavel = 0'],['adicione 1 a minha variável','minha_variavel += 1'],['mostre a variável minha variável','print(minha_variavel)'],['esconda a variável minha variável','# variável oculta'],['minha variável','minha_variavel','reporter']]},
  {id:'myblocks',label:'Meus blocos',color:'#ff506b',blocks:[
    ['Criar um novo bloco','def meu_bloco():\n    pass'],['defina (nome do seu bloco)','def meu_bloco():\n    pass'],['(nome do seu bloco)','meu_bloco()']]},
  {id:'extensions',label:'Extensões',color:'#6f7f91',blocks:[
    ['motor A por 1 rotação a 50%','motor_a.run_angle(500, 360)'],['motor A frear ao parar','motor_a.brake()'],['definir aceleração do motor para média','motor_a.settings(acceleration=1000)'],['movimento interrompido?','motor_a.control.stalled()','boolean'],['aceleração x','hub.imu.acceleration()[0]','reporter'],['velocidade angular x','hub.imu.angular_velocity()[0]','reporter'],['tocar nota 60 por 0,5 batidas','hub.speaker.beep(262, 500)'],['silêncio por 0,5 batidas','wait(500)'],['definir andamento para 60 bpm','andamento = 60']]}
];
CATEGORIES.push({id:'libraries',label:'Bibliotecas',color:'#7b61ff',blocks:[]});

const DEFAULT_CODE = ''; // Um projeto novo começa realmente vazio.

const $ = s => document.querySelector(s);
const state = {activeCategory:'motors',activeOutput:1,outputs:{},blocks:[],selected:null,history:[],future:[],codeHistory:[],codeFuture:[],recordingCode:true,pybricksCatalog:null,collapsedFolders:new Set(),zoom:1,panX:0,panY:0,connected:false,syncTimer:null,updating:false,project:null,activeFileId:null,analysis:{files:{},graph:{}},analysisTimer:null,errorLine:0};
const refs = {categories:$('#categories'),library:$('#library'),libraryList:$('#libraryList'),categoryTitle:$('#categoryTitle'),workspace:$('#workspace'),world:$('#workspaceWorld'),stack:$('#blockStack'),editor:$('#codeEditor'),highlight:$('#highlight'),lines:$('#lineNumbers'),sync:$('#syncState'),terminal:$('#terminalLines'),problems:$('#problemCount'),grid:$('#mainGrid')};

function escapeHTML(s){return s.replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]))}
function uiIcon(name,className=''){const paths={chevron:'<path d="m9 18 6-6-6-6"/>',folder:'<path d="M3 6h7l2 2h9v11H3z"/>',folderOpen:'<path d="M3 7h7l2 2h9l-2 10H3z"/><path d="M3 7v12"/>',file:'<path d="M6 2h8l4 4v16H6z"/><path d="M14 2v5h5"/>',code:'<path d="m9 9-3 3 3 3m6-6 3 3-3 3"/>',play:'<path d="m9 7 8 5-8 5z"/>',warning:'<path d="M12 3 2 21h20z"/><path d="M12 9v5m0 3h.01"/>'};return `<svg class="ui-icon ${className}" viewBox="0 0 24 24" aria-hidden="true">${paths[name]||paths.file}</svg>`}
function now(){return new Date().toLocaleTimeString('pt-BR',{hour12:false})}
function toast(msg,type='success'){const t=$('#toast');t.textContent=msg;t.className=`toast show ${type}`;clearTimeout(t._timer);t._timer=setTimeout(()=>t.className='toast',2400)}
function log(msg,type='info'){const line=document.createElement('div');line.className=`terminal-line ${type}`;line.innerHTML=`<span>${escapeHTML(msg)}</span><time>${now()}</time>`;refs.terminal.prepend(line)}
const audioSettings=JSON.parse(localStorage.getItem('garca-audio')||'{"enabled":true,"volume":24}');
function playSound(kind='success'){if(!audioSettings.enabled)return;try{const context=playSound.context||(playSound.context=new AudioContext()),osc=context.createOscillator(),gain=context.createGain(),tones={snap:[520,.045,'sine'],success:[660,.08,'sine'],start:[440,.11,'triangle'],stop:[240,.09,'triangle'],connect:[740,.12,'sine'],error:[150,.14,'sawtooth'],delete:[210,.05,'square']}[kind]||[520,.06,'sine'];osc.frequency.value=tones[0];osc.type=tones[2];gain.gain.setValueAtTime(Math.max(.001,audioSettings.volume/100*.12),context.currentTime);gain.gain.exponentialRampToValueAtTime(.001,context.currentTime+tones[1]);osc.connect(gain).connect(context.destination);osc.start();osc.stop(context.currentTime+tones[1])}catch{}}
function saveAudioSettings(){localStorage.setItem('garca-audio',JSON.stringify(audioSettings))}
async function openProfiles(selected=''){$('#profilePanel').hidden=false;$('#profileSummary').innerHTML='<div class="metric-loading">Carregando atividade Git…</div>';try{const response=await fetch('/api/github/stats'),data=await response.json(),users=data.users||[];const chosen=users.find(user=>user.username===selected)||users[0];$('#profileName').textContent=chosen?chosen.name:'Ranking de versionamento';$('#profileSummary').innerHTML=chosen?`<div><strong>${chosen.added.toLocaleString('pt-BR')}</strong><span>linhas adicionadas</span></div><div><strong>${chosen.deleted.toLocaleString('pt-BR')}</strong><span>linhas removidas</span></div><div><strong>${chosen.commits.toLocaleString('pt-BR')}</strong><span>atualizações</span></div>`:'';$('#versionRanking').innerHTML=users.sort((a,b)=>b.added-a.added).map((user,index)=>`<li class="${user.username===selected?'selected':''}"><b>${index+1}</b><span>${escapeHTML(user.name)}<small>${data.available?'dados do Git':'configure o usuário no .env'}</small></span><strong>${user.added.toLocaleString('pt-BR')}</strong></li>`).join('')}catch{$('#profileSummary').innerHTML='<div class="metric-loading">As métricas não estão disponíveis agora.</div>'}}
function findCategory(id){return CATEGORIES.find(c=>c.id===id)}
function renderCategories(){refs.categories.innerHTML=CATEGORIES.map(c=>`<button data-cat="${c.id}" class="${c.id===state.activeCategory?'active':''}" style="--color:${c.color}"><i></i><span>${c.label}</span></button>`).join('');refs.categories.onclick=e=>{const b=e.target.closest('button');if(!b)return;state.activeCategory=b.dataset.cat;renderCategories();renderLibrary()}}
function renderLibrary(){const cat=findCategory(state.activeCategory);refs.categoryTitle.textContent=cat.label;if(cat.id==='libraries'){cat.blocks=[];for(const info of Object.values(state.analysis.files||{})){for(const symbol of info.symbols||[]){if(symbol.kind!=='function')continue;const args=(symbol.args||[]).filter(a=>a!=='self'),value=a=>a==='robot'?'robot':a==='hub'?'hub':a==='distance'?'500':a==='speed'?'300':a==='angle'?'90':a==='radius'?'100':'0',call=args.map(a=>`${a}=${value(a)}`).join(', '),shown=args.map(a=>`${a}: ${value(a)}`).join(' · ');cat.blocks.push([`${symbol.name} ${shown}`,`from ${info.module} import ${symbol.name}\n${symbol.name}(${call})`])}}}refs.libraryList.innerHTML=cat.blocks.length?cat.blocks.map((b,i)=>{const schema=schemaFromLabel(b[0]),shape=window.GarcaBlocks?.specs?.[schema]?.shape||(b[2]==='reporter'?'reporter':b[2]==='boolean'?'boolean':cat.id==='events'?'hat':/^(repita|sempre|se )/.test(b[0])?'c-block':'stack');return `<button class="library-block shape-${shape}" style="--color:${cat.color}" data-index="${i}" title="Adicionar ao programa">${escapeHTML(b[0])}</button>`}).join(''):`<p style="color:#7890a5;padding:10px;line-height:1.5">${cat.id==='libraries'?'Crie uma biblioteca Python com funções para gerar blocos automaticamente.':'Nenhum bloco nesta categoria.'}</p>`;refs.libraryList.onclick=e=>{const b=e.target.closest('.library-block');if(!b)return;addBlock(cat,cat.blocks[+b.dataset.index])}}
function snapshot(){state.history.push(JSON.stringify(state.blocks));if(state.history.length>50)state.history.shift();state.future=[]}
function addBlock(cat,b,skip=false){if(!skip)snapshot();state.blocks.push({id:crypto.randomUUID?.()||Date.now()+Math.random(),schema:schemaFromLabel(b[0]),label:b[0],code:b[1],type:b[2]||'',color:cat.color,category:cat.id,disabled:false});renderBlocks();blocksToCode();saveActive();playSound('snap')}
function codeLabel(line){let clean=line.trim();for(const cat of CATEGORIES){for(const b of cat.blocks){if(b[1].split('\n')[0]===clean||clean.includes(b[1].split('(')[0]))return {...b,cat}}}return null}
function schemaFromLabel(label) {
  if (/executar .* por .*rotações/.test(label)) return "motor_run_angle";
  if (/caminho mais curto/.test(label)) return "motor_run_target";
  if (/iniciar motor/.test(label)) return "motor_run";
  if (/parar motor/.test(label)) return "motor_stop";
  if (/^mover /.test(label)) return "movement_straight";
  if (/definir velocidade de movimento/.test(label)) return "movement_speed";
  if (/^espere /.test(label)) return "wait";
  if (/^repita \d/.test(label)) return "repeat";
  if (/tocar bipe por/.test(label)) return "beep";
  if (/definir volume/.test(label)) return "volume";
  if (/^se distância/i.test(label)) return "if_distance";
  if (/^distância \(/i.test(label) || /^distância em/i.test(label)) return "sensor_distance";
  if (/^cor \(/i.test(label) || /^cor em/i.test(label)) return "sensor_color";
  if (/^força \(/i.test(label) || /^força em/i.test(label)) return "sensor_force";
  if (/^botão .*pressionado/i.test(label)) return "button_pressed";
  if (/^não\b/i.test(label)) return "logic_not";
  if (/^(verdadeiro|falso)\s+(e|ou)\s+(verdadeiro|falso)/i.test(label)) return "logic_operation";
  if (/^-?[\d.,]+\s*(==|!=|>=|<=|>|<)\s*-?[\d.,]+/.test(label)) return "comparison";
  if (/^-?[\d.,]+\s*(\+|-|\*|\/|%|\*\*)\s*-?[\d.,]+/.test(label)) return "math_expression";
  return "";
}
function parseCodeToBlocks(code){const result=[];const lines=code.split('\n');for(let i=0;i<lines.length;i++){const line=lines[i].trim();if(!line||line.startsWith('#')||line.startsWith('from ')||line.startsWith('import '))continue;const match=codeLabel(line);if(match)result.push({id:`p-${i}-${Date.now()}`,schema:schemaFromLabel(match[0]),label:match[0],code:line,type:match[2]||'',color:match.cat.color,category:match.cat.id})}return result}
function ptNumber(value){const n=Number(value);if(!Number.isFinite(n))return String(value??'');return (Number.isInteger(n)?String(n):String(Number(n.toFixed(4)))).replace('.',',')}
function pythonValue(value){if(value&&typeof value==='object'){if(value.identifier)return value.identifier;if(value.source)return value.source}if(typeof value==='string')return JSON.stringify(value);return String(value??0)}
function displayValue(value){if(value&&typeof value==='object')return value.identifier||value.source||'valor';if(typeof value==='number')return ptNumber(value);return String(value??'')}
function blockFromIR(ir){
  const p=ir.params||{},cat=findCategory(ir.category)||findCategory('libraries'),color=cat?.color||'#7b61ff';let label='',code=ir.source;
  switch(ir.schema){
    case 'motor_run_angle':label=`${p.port} executar ${p.direction==='ccw'?'↺':'↻'} por ${ptNumber(p.rotations)} rotações a ${ptNumber(p.speed)} graus/s`;code=`motor_${p.port.toLowerCase()}.run_angle(${p.speed}, ${(p.direction==='ccw'?-1:1)*p.rotations*360})`;break;
    case 'motor_run_target':label=`${p.port} ir pelo caminho mais curto para posição ${ptNumber(p.target)} a ${ptNumber(p.speed)} graus/s`;code=`motor_${p.port.toLowerCase()}.run_target(${p.speed}, ${p.target})`;break;
    case 'motor_run':label=`${p.port} iniciar motor ${p.direction==='ccw'?'↺':'↻'} a ${ptNumber(p.speed)} graus/s`;code=`motor_${p.port.toLowerCase()}.run(${(p.direction==='ccw'?-1:1)*p.speed})`;break;
    case 'motor_stop':case 'motor_brake':case 'motor_hold':label=`${p.port} ${ir.schema==='motor_stop'?'parar motor':ir.schema==='motor_brake'?'frear motor':'manter posição'}`;code=`motor_${p.port.toLowerCase()}.${ir.schema.replace('motor_','')}()`;break;
    case 'motor_speed':label=`${p.port} definir velocidade para ${ptNumber(p.percent)} %`;code=`motor_${p.port.toLowerCase()}_speed = ${p.percent*10}`;break;
    case 'movement_straight':label=`mover ${p.direction==='backward'?'↓':'↑'} por ${ptNumber(p.rotations)} rotações`;code=`robot.straight(${(p.direction==='backward'?-1:1)*p.rotations*176})`;break;
    case 'movement_drive':label=`iniciar movimento ${p.direction==='backward'?'↓':'↑'} a ${ptNumber(p.speed)} mm/s com curva ${ptNumber(p.turn_rate)}`;code=`robot.drive(${(p.direction==='backward'?-1:1)*p.speed}, ${p.turn_rate})`;break;
    case 'movement_stop':label='parar de mover';code='robot.stop()';break;
    case 'movement_speed':label=`definir velocidade de movimento para ${ptNumber(p.percent)} %`;code=`robot.settings(straight_speed=${p.percent*10})`;break;
    case 'wait':label=`espere ${ptNumber(p.seconds)} segundos`;code=`wait(${p.seconds*1000})`;break;
    case 'repeat':label=`repita ${ptNumber(p.times)} vezes`;break;
    case 'forever':label='sempre';break;
    case 'if':label=`se ${p.condition} então`;break;
    case 'beep':label=`tocar bipe ${ptNumber(p.frequency)} Hz por ${ptNumber(p.seconds)} segundos`;code=`hub.speaker.beep(${p.frequency}, ${p.seconds*1000})`;break;
    case 'volume':label=`definir volume para ${ptNumber(p.percent)} %`;code=`hub.speaker.volume(${p.percent})`;break;
    case 'display_char':label=`escrever ${typeof p.text==='string'?p.text:pythonValue(p.text)}`;break;
    case 'display_off':label='desligar matriz';break;
    case 'timer_reset':label='zere o cronômetro';break;
    case 'variable_set':label=`mude ${p.name} para ${displayValue(p.value)}`;break;
    case 'variable_change':label=`adicione ${displayValue(p.value)} a ${p.name}`;break;
    case 'library_call':{const args=Object.entries(p.arguments||{}).map(([k,v])=>`${k}: ${displayValue(v)}`).join(' · ');label=`${p.function} ${args}`;code=`from ${p.module} import ${p.function}\n${p.function}(${Object.entries(p.arguments||{}).map(([k,v])=>`${k}=${pythonValue(v)}`).join(', ')})`;break}
    default:label=ir.schema.replaceAll('_',' ')
  }
  return {id:uid('block'),schema:ir.schema,params:p,label,code,type:'',color,category:ir.category,line:ir.line,disabled:false}
}
function reconcileBlocks(irBlocks){const pools={};for(const block of state.blocks.filter(b=>b.type!=='free')){const key=block.schema||schemaFromLabel(block.label);(pools[key]||=[]).push(block)}return irBlocks.map(ir=>{const fresh=blockFromIR(ir),old=pools[ir.schema]?.shift();return old?{...fresh,id:old.id,disabled:old.disabled}:fresh})}
function rebuildCodeFromLabel(block,oldValue='',newValue=''){
  const l=block.label,port=(l.match(/^[A-F]/)||['A'])[0].toLowerCase(),reverse=/↺|↓/.test(l),values=[...l.matchAll(/-?\d+(?:[,.]\d+)?/g)].map(m=>Number(m[0].replace(',','.'))),n=(i,f=0)=>Number.isFinite(values[i])?values[i]:f,clean=x=>Number(Number(x).toFixed(6));
  switch(block.schema||schemaFromLabel(l)){
    case 'motor_run_angle':block.code=`motor_${port}.run_angle(${clean(n(1,500))}, ${clean(n(0,1)*360*(reverse?-1:1))})`;break;
    case 'motor_run_target':block.code=`motor_${port}.run_target(${clean(n(1,500))}, ${clean(n(0,0))})`;break;
    case 'motor_run':block.code=`motor_${port}.run(${clean(n(0,500)*(reverse?-1:1))})`;break;
    case 'motor_stop':block.code=`motor_${port}.stop()`;break;
    case 'motor_speed':block.code=`motor_${port}_speed = ${clean(n(0,75)*10)}`;break;
    case 'movement_straight':block.code=`robot.straight(${clean(n(0,10)*176*(reverse?-1:1))})`;break;
    case 'movement_drive':block.code=`robot.drive(${clean(n(0,200)*(reverse?-1:1))}, ${clean(n(1,0))})`;break;
    case 'movement_speed':block.code=`robot.settings(straight_speed=${clean(n(0,75)*10)})`;break;
    case 'wait':block.code=`wait(${clean(n(0,1)*1000)})`;break;
    case 'repeat':block.code=`for i in range(${Math.max(0,Math.round(n(0,10)))}):\n    pass`;break;
    case 'beep':block.code=`hub.speaker.beep(${clean(n(0,500))}, ${clean(n(1,.5)*1000)})`;break;
    case 'volume':block.code=`hub.speaker.volume(${Math.max(0,Math.min(100,clean(n(0,75))))})`;break;
    default:if(oldValue)block.code=block.code.replace(oldValue.replace(',','.'),newValue.replace(',','.'));
  }
}
function editableLabel(block){
  let label=escapeHTML(block.label);
  if(/^[A-F]\s/.test(block.label)){
    const current=block.label[0];
    label=label.replace(current,`<select class="inline-field port-field" aria-label="Porta do dispositivo">${'ABCDEF'.split('').map(p=>`<option ${p===current?'selected':''}>${p}</option>`).join('')}</select>`);
  }
  if(/minha variável/i.test(block.label))label=label.replace(/minha variável/gi,'<input class="inline-field name-field" data-old="minha_variavel" value="minha_variavel" aria-label="Nome da variável" />');
  if(block.schema==='variable_set'||block.schema==='variable_change'){const name=block.params?.name;if(name)label=label.replace(name,`<input class="inline-field name-field" data-old="${name}" value="${name}" aria-label="Nome da variável" />`)}
  label=label.replace(/\b(robot|hub): ([A-Za-z_]\w*)/g,(_,key,name)=>`${key}: <input class="inline-field name-field" data-old="${name}" value="${name}" aria-label="Variável para ${key}" />`);
  label=label.replace(/(↻|↺|↑|↓)/,m=>{const movement=m==='↑'||m==='↓',options=movement?[['↑','Frente'],['↓','Trás']]:[['↻','Horário'],['↺','Anti-horário']];return `<select class="inline-field direction-field" aria-label="Direção">${options.map(([value,name])=>`<option value="${value}" ${m===value?'selected':''}>${value} ${name}</option>`).join('')}</select>`});
  label=label.replace(/\b(\d+(?:[,.]\d+)?)\b/g,(m)=>`<input class="inline-field number-field" value="${m}" data-old="${m}" inputmode="decimal" aria-label="Valor numérico" />`);
  const codeValues=[...block.code.matchAll(/-?\d+(?:\.\d+)?/g)].map(m=>m[0]);let placeholder=0;label=label.replace(/\(\s*\)/g,()=>{const value=codeValues[placeholder++]||'0';return `<input class="inline-field number-field" value="${value}" data-old="${value}" inputmode="decimal" aria-label="Valor numérico" />`});
  return label;
}
function renderBlocks() {
  refs.stack.innerHTML = state.blocks
    .map((block, index) => {
      const view = window.GarcaBlocks?.render(block) || window.GarcaBlocks?.genericRender(block) || { html: editableLabel(block), shape: "stack" };
      const classes = [
        "program-block",
        `shape-${view.shape}`,
        block.category === "events" ? "event" : "",
        state.selected === block.id ? "selected" : "",
        block.disabled ? "disabled-block" : "",
      ].filter(Boolean).join(" ");
      return `<div class="${classes}" style="--color:${block.color}" draggable="true" data-id="${block.id}" data-index="${index}"><div class="block-content">${view.html}</div></div>`;
    })
    .join("");

  refs.stack.querySelectorAll(".program-block").forEach((element) => {
    element.onclick = (event) => {
      if (event.target.matches("input,select,button,label")) return;
      state.selected = element.dataset.id;
      renderBlocks();
      refs.workspace.focus();
    };
    element.ondblclick = () => {
      state.selected = element.dataset.id;
      renderBlocks();
      refs.stack.querySelector(`[data-id="${element.dataset.id}"] .gb-field`)?.focus();
    };
    element.ondragstart = (event) => {
      if (event.target.matches("input,select,button,label")) {
        event.preventDefault();
        return;
      }
      event.dataTransfer.setData("text/plain", element.dataset.index);
      element.classList.add("dragging");
    };
    element.ondragend = () => element.classList.remove("dragging");
    element.onchange = (event) => {
      const field = event.target.closest(".gb-field");
      if (!field) return;
      const block = state.blocks[Number(element.dataset.index)];
      const value = field.type === "checkbox" ? field.checked : field.value;
      snapshot();
      const changed = window.GarcaBlocks?.update(block, field.dataset.field, value) || window.GarcaBlocks?.updateLegacy(block, field.dataset.field, value);
      if (!changed) {
        toast("Este valor não pôde ser atualizado.", "error");
        playSound("error");
        return;
      }
      if (field.dataset.field?.startsWith("legacy.")) rebuildCodeFromLabel(block);
      renderBlocks();
      blocksToCode();
      saveActive();
      playSound("snap");
    };
  });
}
refs.stack.ondragover=e=>e.preventDefault();refs.stack.ondrop=e=>{e.preventDefault();const from=+e.dataTransfer.getData('text/plain');const target=e.target.closest('.program-block');if(!target||Number.isNaN(from))return;const to=+target.dataset.index;if(from===to)return;snapshot();const [item]=state.blocks.splice(from,1);state.blocks.splice(to,0,item);renderBlocks();blocksToCode();saveActive();playSound('snap')};
refs.stack.oncontextmenu=e=>{const element=e.target.closest('.program-block');if(!element)return;e.preventDefault();const index=Number(element.dataset.index),block=state.blocks[index],menu=$('#blockContextMenu');state.selected=block.id;renderBlocks();menu.innerHTML=`<button data-act="edit">Editar parâmetros</button><button data-act="duplicate">Duplicar</button><button data-act="copy">Copiar</button><button data-act="paste" ${state.blockClipboard?'':'disabled'}>Colar abaixo</button><button data-act="toggle">${block.disabled?'Ativar':'Desativar'}</button><button data-act="python">Mostrar Python</button><button data-act="custom">Criar bloco personalizado</button><button class="danger" data-act="delete">Excluir</button>`;menu.style.left=`${Math.min(e.clientX,innerWidth-210)}px`;menu.style.top=`${Math.min(e.clientY,innerHeight-250)}px`;menu.hidden=false;menu.onclick=event=>{const act=event.target.closest('button')?.dataset.act;if(!act)return;menu.hidden=true;snapshot();if(act==='edit'){renderBlocks();refs.stack.querySelector(`[data-id="${block.id}"] input, [data-id="${block.id}"] select`)?.focus();return}if(act==='duplicate')state.blocks.splice(index+1,0,{...structuredClone(block),id:uid('block')});if(act==='copy'){state.blockClipboard=structuredClone(block);toast('Bloco copiado');return}if(act==='paste'&&state.blockClipboard)state.blocks.splice(index+1,0,{...structuredClone(state.blockClipboard),id:uid('block')});if(act==='toggle')block.disabled=!block.disabled;if(act==='python'){alert(block.code);return}if(act==='custom'){state.activeCategory='myblocks';renderCategories();renderLibrary();toast('Use “Criar um novo bloco” para transformar esta lógica em função.');return}if(act==='delete')state.blocks.splice(index,1);renderBlocks();blocksToCode();saveActive();playSound(act==='delete'?'delete':'snap')}};
function requiredImports(blocks){
  const code=blocks.filter(b=>!b.disabled).map(b=>b.code).join('\n'),imports=[];
  if(/hub\./.test(code))imports.push('from pybricks.hubs import PrimeHub');
  const devices=[];
  if(/motor_[a-f]|steering/.test(code))devices.push('Motor');
  if(/\bcolor\./.test(code))devices.push('ColorSensor');
  if(/\bdistance\./.test(code))devices.push('UltrasonicSensor');
  if(/\bforce\./.test(code))devices.push('ForceSensor');
  if(devices.length)imports.push(`from pybricks.pupdevices import ${[...new Set(devices)].join(', ')}`);
  const parameters=[];
  if(/Port\.|motor_[a-f]|steering|\b(color|distance|force)\./.test(code))parameters.push('Port');
  for(const name of ['Color','Button','Side','Icon','Stop'])if(new RegExp(`\\b${name}\\.`).test(code))parameters.push(name);
  if(parameters.length)imports.push(`from pybricks.parameters import ${[...new Set(parameters)].join(', ')}`);
  if(/DriveBase/.test(code)||/robot\./.test(code))imports.push('from pybricks.robotics import DriveBase');
  const tools=[];if(/wait\(/.test(code))tools.push('wait');if(/StopWatch|timer\./.test(code))tools.push('StopWatch');
  if(tools.length)imports.push(`from pybricks.tools import ${[...new Set(tools)].join(', ')}`);
  if(/randint\(/.test(code))imports.push('from urandom import randint');
  return imports;
}
function blocksToCode(){
  if(state.updating)return;state.updating=true;
  const freeImports=refs.editor.value.split('\n').filter(l=>/^\s*(from|import)\s/.test(l));
  const imports=[...new Set([...freeImports,...requiredImports(state.blocks)])];
  const generatedBody=state.blocks.filter(b=>!b.disabled).map(b=>b.code).join('\n'),preserved=(currentFile()?.preservedPython||[]).map(item=>item.source).join('\n\n'),body=[generatedBody,preserved&&`# Trechos mantidos somente em Python\n${preserved}`].filter(Boolean).join('\n\n'),init=[];
  if(/hub\./.test(body)&&!/hub\s*=/.test(body))init.push('hub = PrimeHub()');
  const motorPorts=[...new Set([...body.matchAll(/motor_([a-f])/g)].map(m=>m[1].toUpperCase()))];
  for(const port of motorPorts)if(!new RegExp(`motor_${port.toLowerCase()}\\s*=`).test(body))init.push(`motor_${port.toLowerCase()} = Motor(Port.${port})`);
  if(/\bsteering\b/.test(body)&&!/steering\s*=/.test(body))init.push('steering = Motor(Port.E)');
  if(/\bcolor\./.test(body)&&!/color\s*=/.test(body))init.push('color = ColorSensor(Port.C)');
  if(/\bdistance\./.test(body)&&!/distance\s*=/.test(body))init.push('distance = UltrasonicSensor(Port.D)');
  if(/\bforce\./.test(body)&&!/force\s*=/.test(body))init.push('force = ForceSensor(Port.E)');
  if(/\btimer\./.test(body)&&!/timer\s*=/.test(body))init.push('timer = StopWatch()');
  if(/\brobot\./.test(body)&&!/robot\s*=/.test(body)){
    if(!motorPorts.includes('A'))init.unshift('motor_a = Motor(Port.A)');
    if(!motorPorts.includes('B'))init.unshift('motor_b = Motor(Port.B)');
    init.push('robot = DriveBase(motor_a, motor_b, wheel_diameter=56, axle_track=112)');
  }
  const sections=[];if(imports.length)sections.push(imports.join('\n'));if(init.length)sections.push('# Dispositivos usados pelo programa\n'+[...new Set(init)].join('\n'));if(body)sections.push('# Programa criado com blocos\n'+body);
  refs.editor.value=sections.join('\n\n').trim();state.errorLine=0;updateEditorVisual();state.updating=false;setSync('ok',refs.editor.value?'Blocos + Python sincronizados':'Projeto vazio · pronto para começar');
}
function validatePython(code){
  if(!code.trim())return null;
  const pairs={')':'(',']':'[','}':'{'},stack=[];
  let quote=null,escaped=false,line=1,openLine=1;
  for(const ch of code){
    if(ch==='\n')line++;
    if(quote){if(escaped){escaped=false;continue}if(ch==='\\'){escaped=true;continue}if(ch===quote)quote=null;continue}
    if(ch==='"'||ch==="'"){quote=ch;openLine=line;continue}
    if('([{'.includes(ch)){stack.push({ch,line});continue}
    if(pairs[ch]){const o=stack.pop();if(!o||o.ch!==pairs[ch])return {line,message:'Parênteses, colchetes ou chaves não correspondem.'}}
  }
  if(quote)return {line:openLine,message:'Texto entre aspas ainda não foi fechado.'};
  if(stack.length)return {line:stack.at(-1).line,message:'Há um parêntese, colchete ou chave aberto.'};
  const lines=code.split('\n');
  for(let i=0;i<lines.length;i++){
    const raw=lines[i],t=raw.trim(); if(!t||t.startsWith('#'))continue;
    if(/^(if|for|while|def|class|elif|else|try|except|finally|with|match|case)\b/.test(t)&&!t.endsWith(':'))return {line:i+1,message:'Falta “:” no final da instrução.'};
    if(i===0&&/^\s+/.test(raw))return {line:1,message:'A primeira linha possui indentação inesperada.'};
    if(/^\s+/.test(raw)){
      let prev=i-1;while(prev>=0&&!lines[prev].trim())prev--;
      if(prev>=0&&!lines[prev].trim().endsWith(':')&&!/^\s+/.test(lines[prev]))return {line:i+1,message:'Indentação inesperada.'};
    }
  }
  return null;
}
async function getSyntaxError(code){
  const fallback=validatePython(code); if(fallback)return fallback;
  if(!code.trim())return null;
  try{const r=await fetch('/api/validate',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({code})});if(!r.ok)throw new Error();const data=await r.json();return data.valid?null:data.error}catch{return null}
}
function setSync(type,text){refs.sync.className=`sync ${type}`;refs.sync.innerHTML=`<i>${type==='error'?'!':'↻'}</i> ${text}`}
async function analyzePython(convert=false){
  const code=refs.editor.value,version=code;
  const err=await getSyntaxError(code);if(refs.editor.value!==version)return;
  state.errorLine=err?.line||0;updateEditorVisual();
  if(err){setSync('error',`Erro na linha ${err.line} · código preservado`);refs.problems.textContent='1';if(convert){log(`Linha ${err.line}: ${err.message}`,'error');playSound('error')}return false}
  refs.problems.textContent='0';
  if(!convert){setSync('wait',code.trim()?'Python válido · saia do editor para atualizar os blocos':'Projeto vazio · comece por blocos ou Python');return true}
  const symbols={};for(const info of Object.values(state.analysis.files||{}))symbols[info.module]=(info.symbols||[]).filter(s=>s.kind==='function').map(s=>s.name);
  let conversion;try{const response=await fetch('/api/project/blocks',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({code,symbols})});conversion=await response.json();if(!response.ok||!conversion.ok)throw new Error(conversion.error?.message||'Falha na conversão semântica')}catch(error){setSync('error','Python válido · conversão visual indisponível');log(error.message,'error');return false}
  snapshot();state.updating=true;state.blocks=reconcileBlocks(conversion.blocks||[]);state.unrepresentedLines=conversion.unknownLines||[];const active=currentFile();if(active)active.preservedPython=conversion.preserved||[];renderBlocks();state.updating=false;
  if(state.unrepresentedLines.length){setSync('wait',`${state.unrepresentedLines.length} linha(s) somente Python · código preservado`);log(`Trechos somente Python preservados nas linhas: ${state.unrepresentedLines.join(', ')}.`,'info')}else setSync('ok',code.trim()?'Blocos + Python sincronizados':'Projeto vazio · pronto para começar');
  if(code.trim())log('AST aplicada: parâmetros dos blocos coloridos foram atualizados.','success');saveActive();return true;
}
function highlightLine(line){let s=escapeHTML(line);s=s.replace(/(#[^\n]*)/g,'<span class="tok-comment">$1</span>');s=s.replace(/(&quot;.*?&quot;|'.*?')/g,'<span class="tok-string">$1</span>');s=s.replace(/\b(from|import|as|def|class|if|else|elif|for|while|in|not|and|or|True|False|None|raise|return|await|async|try|except|finally|with|pass|break|continue)\b/g,'<span class="tok-key">$1</span>');s=s.replace(/\b(PrimeHub|Motor|ColorSensor|UltrasonicSensor|ForceSensor|DriveBase|Port|Color|Button|Side|Icon|StopWatch)\b/g,'<span class="tok-class">$1</span>');s=s.replace(/\b(\d+(?:\.\d+)?)\b/g,'<span class="tok-number">$1</span>');return s||' ';}
function highlightPython(code){return code.split('\n').map((line,i)=>`<span class="code-line ${state.errorLine===i+1?'error-line':''}">${highlightLine(line)}</span>`).join('\n')+'\n'}
function updateEditorVisual(){const code=refs.editor.value;refs.highlight.innerHTML=highlightPython(code);refs.lines.textContent=code.split('\n').map((_,i)=>i+1).join('\n');refs.highlight.scrollTop=refs.editor.scrollTop;refs.highlight.scrollLeft=refs.editor.scrollLeft;refs.lines.scrollTop=refs.editor.scrollTop}
function rememberCode(value=refs.editor.value,selectionStart=refs.editor.selectionStart,selectionEnd=refs.editor.selectionEnd){
  if(!state.recordingCode)return;
  const last=state.codeHistory.at(-1);
  if(last?.value===value)return;
  state.codeHistory.push({value,selectionStart,selectionEnd});
  if(state.codeHistory.length>150)state.codeHistory.shift();
  state.codeFuture=[];
}
function restoreCode(entry){
  if(!entry)return;
  state.recordingCode=false;
  refs.editor.value=entry.value;
  refs.editor.setSelectionRange(entry.selectionStart,entry.selectionEnd);
  refs.editor.dispatchEvent(new Event('input',{bubbles:true}));
  state.recordingCode=true;
}
function undoCode(){
  const entry=state.codeHistory.pop();
  if(!entry)return;
  state.codeFuture.push({value:refs.editor.value,selectionStart:refs.editor.selectionStart,selectionEnd:refs.editor.selectionEnd});
  restoreCode(entry);
}
function redoCode(){
  const entry=state.codeFuture.pop();
  if(!entry)return;
  state.codeHistory.push({value:refs.editor.value,selectionStart:refs.editor.selectionStart,selectionEnd:refs.editor.selectionEnd});
  restoreCode(entry);
}
async function autoCorrectEditor(candidate=refs.editor.value,{announce=false}={}){
  const version=candidate;
  setSync('wait','Corrigindo Python…');
  try{
    const response=await fetch('/api/project/format',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({code:candidate})});
    const result=await response.json();
    if(!response.ok||!result.ok)throw new Error(result.error||'Correção indisponível');
    if(refs.editor.value!==version&&candidate===refs.editor.value)return result;
    if(result.changed&&result.code!==refs.editor.value){
      rememberCode();
      state.recordingCode=false;
      refs.editor.value=result.code;
      refs.editor.setSelectionRange(result.code.length,result.code.length);
      refs.editor.dispatchEvent(new Event('input',{bubbles:true}));
      state.recordingCode=true;
      const description=result.changes?.join(' ')||'Código corrigido automaticamente.';
      log(description,'success');
      if(announce)toast('Indentação e Python corrigidos');
    }
    if(!result.valid&&result.error){
      state.errorLine=result.error.line||0;
      updateEditorVisual();
      setSync('error',`Linha ${result.error.line}: ${result.error.message}`);
    }
    return result;
  }catch(error){
    setSync('error','Não foi possível executar a correção automática');
    if(announce)toast(error.message,'error');
    return null;
  }
}
refs.editor.addEventListener('beforeinput',event=>{
  if(state.recordingCode&&!['historyUndo','historyRedo'].includes(event.inputType))rememberCode();
});
refs.editor.addEventListener('input',()=>{state.errorLine=0;updateEditorVisual();setSync('wait','Editando Python…');clearTimeout(state.syncTimer);state.syncTimer=setTimeout(()=>analyzePython(false),350);saveActive()});
refs.editor.addEventListener('paste',async event=>{
  event.preventDefault();
  rememberCode();
  const pasted=event.clipboardData?.getData('text/plain')||'';
  const start=refs.editor.selectionStart,end=refs.editor.selectionEnd;
  const candidate=refs.editor.value.slice(0,start)+pasted+refs.editor.value.slice(end);
  state.recordingCode=false;
  refs.editor.value=candidate;
  refs.editor.setSelectionRange(start+pasted.length,start+pasted.length);
  refs.editor.dispatchEvent(new Event('input',{bubbles:true}));
  state.recordingCode=true;
  await autoCorrectEditor(candidate,{announce:true});
});
refs.editor.addEventListener('blur',async()=>{await autoCorrectEditor(refs.editor.value);await analyzePython(true)});
refs.editor.addEventListener('scroll',updateEditorVisual);
refs.editor.addEventListener('keydown',e=>{
  const modifier=e.ctrlKey||e.metaKey,key=e.key.toLowerCase();
  if(modifier&&key==='z'){e.preventDefault();e.shiftKey?redoCode():undoCode();return}
  if(modifier&&key==='y'){e.preventDefault();redoCode();return}
  if(e.key==='Tab'){e.preventDefault();const s=e.target.selectionStart;e.target.setRangeText('    ',s,e.target.selectionEnd,'end');e.target.dispatchEvent(new Event('input'))}
  if(e.key==='Enter'){const s=e.target.selectionStart,before=e.target.value.slice(0,s),line=before.split('\n').pop();const indent=(line.match(/^\s*/)||[''])[0]+(line.trim().endsWith(':')?'    ':'');e.preventDefault();e.target.setRangeText('\n'+indent,s,e.target.selectionEnd,'end');e.target.dispatchEvent(new Event('input'))}
});
function uid(prefix='id'){return `${prefix}-${crypto.randomUUID?.()||Date.now().toString(36)+Math.random().toString(36).slice(2)}`}
function createProject(){
  const main={id:uid('file'),name:'main.py',path:'main.py',content:'',blocks:[],modified:false,tracked:false};
  const mission={id:uid('file'),name:'saida_1.py',path:'missions/saida_1.py',content:'',blocks:[],modified:false,tracked:false};
  return {name:'garca_programacao',entrypoint:mission.id,folders:[{id:uid('folder'),path:'missions'}],files:[main,mission],deletedPaths:[],git:{branch:'main'}};
}
function currentFile(){return state.project?.files.find(f=>f.id===state.activeFileId)}
function fileByPath(path){return state.project.files.find(f=>f.path===path)}
function moduleName(path){return path.replace(/\.py$/,'').replace(/\/__init__$/,'').replaceAll('/','.')}
function folderPaths(){return ['',...state.project.folders.map(f=>f.path).sort()]}
function persistProject(){localStorage.setItem('garca-studio-project',JSON.stringify({version:3,project:state.project,activeFileId:state.activeFileId}))}
function saveActive(mark=true){const file=currentFile();if(!file)return;file.content=refs.editor.value;file.blocks=state.blocks;file.modified=mark||file.modified;$('#fileDirty').textContent=file.modified?'●':'';persistProject();renderFileTree();clearTimeout(state.analysisTimer);state.analysisTimer=setTimeout(analyzeProject,450)}
function renderOutputTabs(){const missions=state.project.files.filter(f=>/^missions\/saida_\d+\.py$/.test(f.path)).sort((a,b)=>a.path.localeCompare(b.path,undefined,{numeric:true}));document.querySelectorAll('#outputTabs .output').forEach(x=>x.remove());for(const file of missions){const n=Number(file.name.match(/\d+/)?.[0]);const btn=document.createElement('button');btn.className=`output ${file.id===state.activeFileId?'active':''}`;btn.dataset.fileId=file.id;btn.dataset.output=n;btn.textContent=`Saída ${n}`;$('#outputTabs').insertBefore(btn,$('#addOutput'))}}
function renderFileTree(){
  const tree=$('#fileTree');if(!state.project)return;let html='';
  const walk=(folder,depth)=>{
    const childrenFolders=state.project.folders.filter(f=>(f.path.includes('/')?f.path.slice(0,f.path.lastIndexOf('/')):'')===folder).sort((a,b)=>a.path.localeCompare(b.path));
    const childrenFiles=state.project.files.filter(f=>(f.path.includes('/')?f.path.slice(0,f.path.lastIndexOf('/')):'')===folder).sort((a,b)=>a.name.localeCompare(b.name));
    for(const f of childrenFolders){const collapsed=state.collapsedFolders.has(f.path);html+=`<div class="tree-row folder-row ${collapsed?'collapsed':'expanded'}" data-folder="${escapeHTML(f.path)}" data-parent="${escapeHTML(folder)}" aria-expanded="${!collapsed}" style="padding-left:${7+depth*13}px">${uiIcon('chevron','twisty')}${uiIcon(collapsed?'folder':'folderOpen','file-icon folder-icon')}<span>${escapeHTML(f.path.split('/').pop())}</span></div>`;if(!collapsed)walk(f.path,depth+1)}
    for(const f of childrenFiles){const info=state.analysis.files?.[f.id],broken=(info?.diagnostics||[]).some(d=>d.severity==='error');html+=`<div class="tree-row tree-enter ${f.id===state.activeFileId?'active ':''}${broken?'broken':''}" data-parent="${escapeHTML(folder)}" data-file-id="${f.id}" draggable="true" style="padding-left:${7+depth*13}px"><span class="tree-spacer"></span>${uiIcon(f.id===state.project.entrypoint?'play':info?.symbols?.length?'code':'file',`file-icon ${info?.symbols?.length?'lib-icon':''}`)}<span>${escapeHTML(f.name)}</span>${broken?'<span class="badge">!</span>':f.modified?'<span class="dirty">●</span>':''}</div>`}
  };walk('',0);tree.innerHTML=html;renderOutputTabs();
}
function openFile(id){
  if(state.activeFileId&&state.activeFileId!==id)saveActive(false);const file=state.project.files.find(f=>f.id===id);if(!file)return;
  state.activeFileId=id;state.project.entrypoint=/^missions\/saida_/.test(file.path)?id:state.project.entrypoint;refs.editor.value=file.content||'';state.codeHistory=[];state.codeFuture=[];state.blocks=(file.blocks||parseCodeToBlocks(file.content||'')).filter(block=>block.type!=='free');state.selected=null;state.errorLine=0;updateEditorVisual();renderBlocks();renderFileTree();
  $('#activeFileTab').textContent=file.path;$('#fileDirty').textContent=file.modified?'●':'';$('#statusFile').textContent=`Arquivo: ${file.path}`;$('#repoPath').value=file.path;const n=file.path.match(/^missions\/saida_(\d+)\.py$/)?.[1];if(n)state.activeOutput=Number(n);setSync('ok',file.content.trim()?'Blocos + Python sincronizados':'Arquivo vazio · comece por blocos ou Python');persistProject();analyzePython(false);
}
function loadOutput(n){let file=fileByPath(`missions/saida_${n}.py`);if(!file){file={id:uid('file'),name:`saida_${n}.py`,path:`missions/saida_${n}.py`,content:'',blocks:[],modified:true,tracked:false};state.project.files.push(file)}openFile(file.id)}
function addOutput(){const nums=state.project.files.map(f=>f.path.match(/^missions\/saida_(\d+)\.py$/)?.[1]).filter(Boolean).map(Number),n=Math.max(0,...nums)+1;loadOutput(n);toast(`Saída ${n} criada`);renderFileTree()}
function uniquePath(path,ignoreId=null){return !state.project.files.some(f=>f.path===path&&f.id!==ignoreId)&&!state.project.folders.some(f=>f.path===path)}
function askDialog({title,text='',value='',select=false}){return new Promise(resolve=>{const d=$('#projectDialog');$('#dialogTitle').textContent=title;$('#dialogText').textContent=text;$('#dialogInput').value=value;$('#dialogSelectLabel').hidden=!select;if(select)$('#dialogSelect').innerHTML=folderPaths().map(p=>`<option value="${escapeHTML(p)}">/${escapeHTML(p)||'(raiz)'}</option>`).join('');d.onclose=()=>resolve(d.returnValue==='confirm'?{value:$('#dialogInput').value.trim(),folder:$('#dialogSelect').value}:null);d.showModal();setTimeout(()=>$('#dialogInput').focus(),20)})}
async function createFile(template=''){
  const answer=await askDialog({title:template?'Nova biblioteca':'Novo arquivo Python',text:template?'Será criado com assinaturas editáveis, sem implementação inventada.':'Informe o nome e a pasta do novo módulo.',value:template?'movements.py':'novo_arquivo.py',select:true});if(!answer)return;let name=answer.value;if(!name.endsWith('.py'))name+='.py';if(!/^[A-Za-z_]\w*\.py$/.test(name))return toast('Use um nome Python válido.','error');const path=[answer.folder,name].filter(Boolean).join('/');if(!uniquePath(path))return toast('Já existe um item com esse nome.','error');const content=template?'# Biblioteca de movimentos da equipe\n\ndef gyro_move(robot, hub, distance, speed=300):\n    pass\n\ndef gyro_turn(robot, hub, angle, speed=300):\n    pass\n\ndef gyro_curve(robot, hub, radius, angle, speed=300):\n    pass\n':'';const file={id:uid('file'),name,path,content,blocks:parseCodeToBlocks(content),modified:true,tracked:false};state.project.files.push(file);openFile(file.id);await analyzeProject();toast(`${name} criado`)
}
async function createFolder(){const a=await askDialog({title:'Nova pasta',text:'Use nomes simples, sem espaços.',value:'libraries',select:true});if(!a)return;if(!/^[A-Za-z_]\w*$/.test(a.value))return toast('Nome de pasta inválido.','error');const path=[a.folder,a.value].filter(Boolean).join('/');if(!uniquePath(path))return toast('Já existe um item com esse nome.','error');state.project.folders.push({id:uid('folder'),path});persistProject();renderFileTree()}
async function analyzeProject(){
  if(!state.project)return;try{const r=await fetch('/api/project/analyze',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({files:state.project.files.map(({id,path,content})=>({id,path,content}))})});if(!r.ok)throw new Error();state.analysis=await r.json();renderFileTree();if(state.activeCategory==='libraries')renderLibrary();const current=state.analysis.files?.[state.activeFileId],errors=(current?.diagnostics||[]).filter(d=>d.severity==='error');refs.problems.textContent=errors.length;if(errors.length){state.errorLine=errors[0].line||0;updateEditorVisual();setSync('error',errors[0].message)}else if(refs.editor.value.trim())setSync('ok','Python e projeto válidos')}catch{/* validação local continua disponível */}
}
async function semanticRelocate(file,newPath){
  saveActive(false);const oldModule=moduleName(file.path),newModule=moduleName(newPath);const affected=(state.analysis.reverse?.[file.id]||[]);if(affected.length&&!confirm(`Este módulo possui ${affected.length} referência(s) de import. Atualizar referências automaticamente?`))return;
  try{const r=await fetch('/api/project/refactor',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({files:state.project.files.map(({id,path,content})=>({id,path,content})),oldModule,newModule})});if(r.ok){const data=await r.json();for(const changed of data.files||[]){const target=state.project.files.find(f=>f.id===changed.id);if(target&&target.id!==file.id){target.content=changed.content;target.blocks=parseCodeToBlocks(changed.content);target.modified=true}}}}catch{}
  state.project.deletedPaths||=[];if(file.tracked)state.project.deletedPaths.push(file.path);file.tracked=false;file.path=newPath;file.name=newPath.split('/').pop();file.modified=true;state.activeFileId=null;openFile(file.id);await analyzeProject();toast('Arquivo e imports atualizados semanticamente')
}
async function renameFile(file){const a=await askDialog({title:'Renomear arquivo',text:`Módulo atual: ${moduleName(file.path)}`,value:file.name});if(!a)return;let name=a.value;if(!name.endsWith('.py'))name+='.py';if(!/^[A-Za-z_]\w*\.py$/.test(name))return toast('Nome inválido.','error');const folder=file.path.includes('/')?file.path.slice(0,file.path.lastIndexOf('/')):'',path=[folder,name].filter(Boolean).join('/');if(!uniquePath(path,file.id))return toast(`Já existe ${name} nesta pasta.`,'error');await semanticRelocate(file,path)}
async function moveFile(file){const a=await askDialog({title:'Mover arquivo',text:`Mover ${file.name} para outra pasta.`,value:file.name,select:true});if(!a)return;const path=[a.folder,file.name].filter(Boolean).join('/');if(!uniquePath(path,file.id))return toast('Já existe um arquivo com esse nome no destino.','error');await semanticRelocate(file,path)}
async function deleteFile(file){const users=state.analysis.reverse?.[file.id]||[];const warning=users.length?`Este arquivo é usado por ${users.length} arquivo(s):\n${users.map(id=>state.project.files.find(f=>f.id===id)?.path).join('\n')}\n\nExcluir mesmo assim?`:`Excluir ${file.path}?`;if(!confirm(warning))return;state.project.deletedPaths||=[];if(file.tracked)state.project.deletedPaths.push(file.path);state.project.files=state.project.files.filter(f=>f.id!==file.id);if(state.activeFileId===file.id)openFile(state.project.files[0]?.id);persistProject();renderFileTree();analyzeProject()}
function showFileMenu(file,x,y){const menu=$('#fileContextMenu');menu.innerHTML=`<button data-act="rename">Renomear</button><button data-act="move">Mover para…</button><button data-act="duplicate">Duplicar</button><button data-act="deps">Mostrar dependências</button><button data-act="entry">Definir como entrada</button><button class="danger" data-act="delete">Excluir</button>`;menu.style.left=`${x}px`;menu.style.top=`${y}px`;menu.hidden=false;menu.onclick=async e=>{const act=e.target.dataset.act;menu.hidden=true;if(act==='rename')renameFile(file);if(act==='move')moveFile(file);if(act==='delete')deleteFile(file);if(act==='entry'){state.project.entrypoint=file.id;persistProject();renderFileTree();toast(`${file.path} é o arquivo de entrada`)}if(act==='duplicate'){let path=file.path.replace(/\.py$/,'_copia.py'),i=2;while(!uniquePath(path))path=file.path.replace(/\.py$/,`_copia_${i++}.py`);state.project.files.push({...file,id:uid('file'),name:path.split('/').pop(),path,modified:true,blocks:structuredClone(file.blocks||[])});renderFileTree();persistProject()}if(act==='deps'){const ids=state.analysis.reverse?.[file.id]||[];alert(ids.length?`Usado por:\n${ids.map(id=>state.project.files.find(f=>f.id===id)?.path).join('\n')}`:'Nenhum arquivo depende deste módulo.')}}
}
$('#fileTree').onclick=e=>{const folder=e.target.closest('[data-folder]');if(folder){const path=folder.dataset.folder;if(state.collapsedFolders.has(path)){state.collapsedFolders.delete(path);renderFileTree();playSound('snap')}else{folder.classList.add('folding');setTimeout(()=>{state.collapsedFolders.add(path);renderFileTree()},120)}return}const row=e.target.closest('[data-file-id]');if(row)openFile(row.dataset.fileId)};
$('#fileTree').ondragstart=e=>{const row=e.target.closest('[data-file-id]');if(row)e.dataTransfer.setData('application/x-garca-file',row.dataset.fileId)};
$('#fileTree').ondragover=e=>{if(e.target.closest('[data-folder]'))e.preventDefault()};
$('#fileTree').ondrop=e=>{const folder=e.target.closest('[data-folder]')?.dataset.folder,id=e.dataTransfer.getData('application/x-garca-file');if(!folder||!id)return;const file=state.project.files.find(f=>f.id===id),path=`${folder}/${file.name}`;if(!uniquePath(path,file.id))return toast('Já existe um arquivo com esse nome no destino.','error');semanticRelocate(file,path)};
$('#fileTree').oncontextmenu=e=>{const row=e.target.closest('[data-file-id]');if(!row)return;e.preventDefault();showFileMenu(state.project.files.find(f=>f.id===row.dataset.fileId),e.clientX,e.clientY)};
document.addEventListener('click',e=>{if(!e.target.closest('#fileContextMenu'))$('#fileContextMenu').hidden=true;if(!e.target.closest('#blockContextMenu'))$('#blockContextMenu').hidden=true});
$('#newFileBtn').onclick=()=>createFile();$('#newFolderBtn').onclick=createFolder;$('#libraryTemplateBtn').onclick=()=>createFile('movements');$('#dependencyBtn').onclick=()=>{const lines=[];for(const [from,tos] of Object.entries(state.analysis.graph||{})){const f=state.project.files.find(x=>x.id===from);for(const to of tos){const t=state.project.files.find(x=>x.id===to);lines.push(`${f?.path} → ${t?.path}`)}}alert(lines.length?lines.join('\n'):'O projeto ainda não possui dependências internas.')};
$('#importFileBtn').onclick=()=>$('#fileImportInput').click();$('#fileImportInput').onchange=async e=>{const input=e.target.files[0];if(!input)return;const path=input.name;if(!uniquePath(path))return toast('Já existe um arquivo com esse nome.','error');const file={id:uid('file'),name:input.name,path,content:await input.text(),blocks:[],modified:true,tracked:false};file.blocks=parseCodeToBlocks(file.content);state.project.files.push(file);openFile(file.id);analyzeProject()};
$('#outputTabs').onclick=e=>{const b=e.target.closest('.output');if(b)openFile(b.dataset.fileId)};$('#addOutput').onclick=addOutput;$('#newBtn').onclick=()=>createFile();
function deleteSelected(){if(!state.selected)return;snapshot();state.blocks=state.blocks.filter(b=>b.id!==state.selected);state.selected=null;renderBlocks();blocksToCode();saveActive();playSound('delete')}
function undoBlocks(){if(!state.history.length)return;state.future.push(JSON.stringify(state.blocks));state.blocks=JSON.parse(state.history.pop());renderBlocks();blocksToCode();saveActive()}
function redoBlocks(){if(!state.future.length)return;state.history.push(JSON.stringify(state.blocks));state.blocks=JSON.parse(state.future.pop());renderBlocks();blocksToCode();saveActive()}
refs.workspace.addEventListener('keydown',e=>{const modifier=e.ctrlKey||e.metaKey,key=e.key.toLowerCase();if(modifier&&key==='z'){e.preventDefault();e.shiftKey?redoBlocks():undoBlocks();return}if(modifier&&key==='y'){e.preventDefault();redoBlocks();return}if(e.key==='Backspace'||e.key==='Delete'){e.preventDefault();deleteSelected()}});document.querySelector('.workspace-controls').onclick=e=>{const act=e.target.closest('button')?.dataset.act;if(!act)return;if(act==='delete')deleteSelected();if(act==='zoomIn')state.zoom=Math.min(1.5,state.zoom+.1);if(act==='zoomOut')state.zoom=Math.max(.5,state.zoom-.1);if(act==='fit'){state.zoom=.85;state.panX=0;state.panY=0}if(act==='undo')undoBlocks();if(act==='redo')redoBlocks();applyTransform()};
function applyTransform(){refs.world.style.transform=`translate(${state.panX}px,${state.panY}px) scale(${state.zoom})`}
let panning=false,lastX=0,lastY=0;refs.workspace.oncontextmenu=e=>e.preventDefault();refs.workspace.onpointerdown=e=>{if(e.button===2&&!e.target.closest('.program-block')){panning=true;lastX=e.clientX;lastY=e.clientY;refs.workspace.setPointerCapture(e.pointerId)}};refs.workspace.onpointermove=e=>{if(!panning)return;state.panX+=e.clientX-lastX;state.panY+=e.clientY-lastY;lastX=e.clientX;lastY=e.clientY;applyTransform()};refs.workspace.onpointerup=()=>panning=false;
$('#collapseLibrary').onclick=()=>document.querySelector('.blocks-pane').classList.toggle('library-closed');$('#githubToggle').onclick=()=>refs.grid.classList.toggle('github-open');$('#closeGithub').onclick=()=>refs.grid.classList.remove('github-open');
const PYBRICKS_SERVICE='c5f50001-8280-46da-89f4-6d8051e4aeef';
const PYBRICKS_CONTROL='c5f50002-8280-46da-89f4-6d8051e4aeef';
async function writeHub(bytes){if(!state.controlChar)throw new Error('HUB não está pronto');await state.controlChar.writeValueWithResponse(Uint8Array.from(bytes))}
function setHubDisconnected(){if(state.connected)playSound('stop');state.connected=false;state.controlChar=null;$('#hubCard').classList.remove('connected');$('#hubState').textContent='HUB desconectado';$('#hubModel').textContent='SPIKE Prime · Pybricks';$('#footerHub').textContent='HUB desconectado';$('#stopBtn').disabled=true;$('#runBtn').disabled=false}
async function connectHub(){
  if(!navigator.bluetooth){toast('Web Bluetooth não está disponível neste navegador. Use Chrome ou Edge.','error');log('Conexão Bluetooth requer Chrome/Edge e HTTPS.','error');return}
  try{
    $('#hubState').textContent='Procurando HUB…';
    const device=await navigator.bluetooth.requestDevice({filters:[{services:[PYBRICKS_SERVICE]}],optionalServices:[PYBRICKS_SERVICE]});
    device.addEventListener('gattserverdisconnected',()=>{setHubDisconnected();log('O HUB foi desconectado.','error')});
    const server=await device.gatt.connect(),service=await server.getPrimaryService(PYBRICKS_SERVICE),control=await service.getCharacteristic(PYBRICKS_CONTROL);
    await control.startNotifications();
    control.addEventListener('characteristicvaluechanged',event=>{const bytes=new Uint8Array(event.target.value.buffer);if(bytes[0]===1&&bytes.length>1){const text=new TextDecoder().decode(bytes.slice(1));if(text)log(text.replace(/\n$/,''),'info')}});
    state.device=device;state.controlChar=control;state.connected=true;$('#hubCard').classList.add('connected');$('#hubState').textContent='HUB conectado';$('#hubModel').textContent=`${device.name||'SPIKE Prime'} · Pybricks`;$('#footerHub').textContent='HUB conectado';$('#stopBtn').disabled=false;log(`Conectado a ${device.name||'SPIKE Prime'} pelo serviço oficial Pybricks.`,'success');toast('HUB conectado com sucesso');playSound('connect');
  }catch(err){setHubDisconnected();log(`Conexão cancelada: ${err.message}`,'error')}
}
function metaCommand(size){const data=new Uint8Array(5);new DataView(data.buffer).setUint32(1,size,true);data[0]=3;return data}
function ramCommand(offset,payload){const data=new Uint8Array(5+payload.length);data[0]=4;new DataView(data.buffer).setUint32(1,offset,true);data.set(payload,5);return data}
async function compileProgram(){
  saveActive(false);const entry=state.project.files.find(f=>f.id===state.project.entrypoint)||currentFile();if(!entry?.content.trim())throw new Error('O arquivo de entrada está vazio');
  setSync('wait','Resolvendo módulos internos…');
  const bundleResponse=await fetch('/api/project/bundle',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({entryId:entry.id,files:state.project.files.map(({id,path,content})=>({id,path,content}))})});
  const bundle=await bundleResponse.json();if(!bundleResponse.ok||!bundle.ok)throw new Error(bundle.error||'Não foi possível resolver as bibliotecas internas');
  const syntax=await getSyntaxError(bundle.code);if(syntax){state.errorLine=syntax.line;updateEditorVisual();throw new Error(`Programa final, linha ${syntax.line}: ${syntax.message}`)}
  if(typeof window.pybricksCompile!=='function')throw new Error('Compilador Pybricks não foi carregado');
  setSync('wait',`Compilando ${bundle.modules.length} módulo(s)…`);const result=await window.pybricksCompile('main.py',bundle.code);
  if(result.status!==0||!result.mpy)throw new Error(result.err?.join(' ')||'O compilador MicroPython rejeitou o programa');
  log(`Dependências resolvidas: ${bundle.modules.join(' → ')}`,'info');return result.mpy;
}
async function uploadProgram(runAfter=true){
  if(!state.connected||!state.controlChar)throw new Error('Conecte o HUB primeiro');
  const mpy=await compileProgram();$('#runBtn').disabled=true;$('#downloadBtn').disabled=true;log(`Compilado: ${mpy.length} bytes. Enviando ao HUB…`,'info');
  try{
    await writeHub([0]);await state.controlChar.writeValueWithResponse(metaCommand(0));
    const chunkSize=15;for(let offset=0;offset<mpy.length;offset+=chunkSize){await state.controlChar.writeValueWithResponse(ramCommand(offset,mpy.slice(offset,offset+chunkSize)));setSync('wait',`Enviando ao HUB · ${Math.round(Math.min(1,(offset+chunkSize)/mpy.length)*100)}%`)}
    await state.controlChar.writeValueWithResponse(metaCommand(mpy.length));
    if(runAfter){await writeHub([1,0]);log('Programa enviado e iniciado no HUB.','success');toast('Programa executando no HUB');playSound('start')}else{log('Programa baixado para o slot 0 do HUB.','success');toast('Programa salvo no HUB');playSound('success')}
    setSync('ok','Blocos + Python sincronizados');$('#stopBtn').disabled=false;
  }finally{$('#runBtn').disabled=false;$('#downloadBtn').disabled=false}
}
$('#connectBtn').onclick=connectHub;$('#hubCard').onclick=connectHub;
$('#runBtn').onclick=()=>uploadProgram(true).catch(err=>{setSync('error','Não foi possível executar');log(err.message,'error');toast(err.message,'error')});
$('#stopBtn').onclick=async()=>{try{await writeHub([0]);log('Programa interrompido no HUB.','info');playSound('stop');$('#runBtn').disabled=false}catch(err){log(err.message,'error')}};
$('#downloadBtn').onclick=()=>uploadProgram(false).catch(err=>{setSync('error','Não foi possível baixar');log(err.message,'error');toast(err.message,'error')});
async function loadPybricksCatalog(){
  try{const response=await fetch('/pybricks-api.json');if(response.ok)state.pybricksCatalog=await response.json()}catch{state.pybricksCatalog=null}
}
function pybricksModuleCompletions(module){
  const details=state.pybricksCatalog?.modules?.[module];
  const catalog=details?[...Object.keys(details.classes||{}),...Object.keys(details.functions||{})]:[];
  return [...new Set([...catalog,...(PYBRICKS_COMPLETIONS[module]||[])])];
}
function inferredPybricksClass(variable){
  const expression=new RegExp(`\\b${variable.replace(/[.*+?^${}()|[\\]\\]/g,'\\$&')}\\s*=\\s*([A-Za-z_]\\w*)\\s*\\(`);
  return refs.editor.value.match(expression)?.[1]||'';
}
function pybricksMemberCompletions(owner){
  const catalog=state.pybricksCatalog;
  const component=owner.split('.').pop();
  if(catalog?.componentTypes?.[component])return catalog.componentTypes[component];
  const className=inferredPybricksClass(owner);
  for(const details of Object.values(catalog?.modules||{})){
    const info=details.classes?.[className];
    if(info)return [...new Set([...(info.methods||[]),...(info.properties||[]),...(info.constants||[])])];
  }
  const deviceType=owner.startsWith('motor_')?'motor':owner.startsWith('color')?'color':owner.startsWith('distance')?'distance':owner.startsWith('force')?'force':owner.startsWith('timer')?'timer':owner;
  return PYBRICKS_COMPLETIONS[deviceType]||[];
}
const PYBRICKS_COMPLETIONS = {
  "pybricks.hubs": ["PrimeHub"],
  "pybricks.pupdevices": ["Motor", "ColorSensor", "UltrasonicSensor", "ForceSensor"],
  "pybricks.parameters": ["Port", "Color", "Button", "Side", "Stop", "Direction", "Icon"],
  "pybricks.robotics": ["DriveBase"],
  "pybricks.tools": ["wait", "StopWatch", "multitask", "run_task"],
  motor: ["run", "run_angle", "run_target", "run_time", "stop", "brake", "hold", "angle", "speed", "reset_angle", "stalled", "done"],
  robot: ["straight", "turn", "curve", "drive", "stop", "distance", "angle", "state", "settings", "reset"],
  hub: ["display", "light", "speaker", "imu", "buttons", "battery", "system"],
  color: ["color", "reflection", "ambient", "hsv", "lights", "detectable_colors"],
  distance: ["distance", "presence", "lights"],
  force: ["force", "distance", "pressed", "touched"],
  timer: ["time", "pause", "resume", "reset"],
};

function updateAutocomplete() {
  const box = $("#autocomplete");
  const position = refs.editor.selectionStart;
  const before = refs.editor.value.slice(0, position);
  const line = before.split("\n").pop();
  const items = [];
  let replaceStart = position;

  const from = line.match(/from\s+([A-Za-z_]\w*(?:\.[A-Za-z_]\w*)*)\s+import\s*([A-Za-z_]\w*)?$/);
  if (from) {
    const module = from[1];
    const prefix = from[2] || "";
    replaceStart = position - prefix.length;
    const projectInfo = Object.values(state.analysis.files || {}).find(
      (item) => item.module === module,
    );
    for (const symbol of projectInfo?.symbols || []) {
      if (symbol.name.startsWith(prefix)) {
        items.push({ name: symbol.name, kind: symbol.kind });
      }
    }
    for (const name of pybricksModuleCompletions(module)) {
      if (name.startsWith(prefix)) {
        items.push({ name, kind: "Pybricks" });
      }
    }
  } else {
    const member = line.match(/([A-Za-z_]\w*(?:\.[A-Za-z_]\w*)*)\.([A-Za-z_]\w*)$/);
    if (member) {
      const alias = member[1];
      const rootAlias = alias.split('.')[0];
      const prefix = member[2];
      replaceStart = position - prefix.length;
      const active = state.analysis.files?.[state.activeFileId];
      const imported = (active?.imports || []).find(
        (item) => (item.alias || item.module.split(".").pop()) === rootAlias,
      );
      const projectInfo = Object.values(state.analysis.files || {}).find(
        (item) => item.module === imported?.module,
      );
      for (const symbol of projectInfo?.symbols || []) {
        if (symbol.name.startsWith(prefix)) {
          items.push({ name: symbol.name, kind: symbol.kind });
        }
      }
      for (const name of pybricksMemberCompletions(alias)) {
        if (name.startsWith(prefix)) {
          items.push({ name, kind: "método" });
        }
      }
    }
  }

  const uniqueItems = [...new Map(items.map((item) => [item.name, item])).values()];
  if (!uniqueItems.length) {
    box.hidden = true;
    return;
  }
  box.dataset.replaceStart = replaceStart;
  box.innerHTML = uniqueItems
    .slice(0, 12)
    .map(
      (item, index) =>
        `<button class="${index === 0 ? "active" : ""}" data-name="${item.name}">${item.name}<small>${item.kind}</small></button>`,
    )
    .join("");
  const lineNumber = before.split("\n").length - 1;
  const column = line.length;
  box.style.top = `${Math.min(250, 18 + lineNumber * 20 - refs.editor.scrollTop)}px`;
  box.style.left = `${Math.min(330, 54 + column * 7 - refs.editor.scrollLeft)}px`;
  box.hidden = false;
  box.onclick = (event) => {
    const button = event.target.closest("button");
    if (button) applyCompletion(button.dataset.name);
  };
}
function applyCompletion(name){const box=$('#autocomplete'),start=Number(box.dataset.replaceStart),end=refs.editor.selectionStart;refs.editor.setRangeText(name,start,end,'end');box.hidden=true;refs.editor.focus();refs.editor.dispatchEvent(new Event('input'))}
refs.editor.addEventListener('keyup',e=>{if(!['ArrowUp','ArrowDown','Enter','Escape'].includes(e.key))updateAutocomplete()});
refs.editor.addEventListener('keydown',e=>{const box=$('#autocomplete');if(box.hidden)return;const items=[...box.querySelectorAll('button')],index=items.findIndex(x=>x.classList.contains('active'));if(e.key==='ArrowDown'||e.key==='ArrowUp'){e.preventDefault();items[index]?.classList.remove('active');items[(index+(e.key==='ArrowDown'?1:-1)+items.length)%items.length].classList.add('active')}if(e.key==='Enter'){e.preventDefault();applyCompletion(items[Math.max(0,index)].dataset.name)}if(e.key==='Escape'){box.hidden=true}},true);

$('#commitBtn').onclick=async()=>{saveActive(false);const changed=state.project.files.filter(f=>f.modified),deleted=[...new Set(state.project.deletedPaths||[])];if(!changed.length&&!deleted.length)return toast('Nenhum arquivo foi modificado','error');const payload={files:[...changed.map(f=>({path:f.path,content:f.content})),...deleted.map(path=>({path,delete:true}))],message:$('#commitMessage').value,author:$('#contributor').value};try{const r=await fetch('/api/github/commit',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});const data=await r.json();if(!r.ok)throw new Error(data.error||'Servidor não configurado');for(const f of changed){f.modified=false;f.tracked=true}state.project.deletedPaths=[];persistProject();renderFileTree();log(`Atualização com ${payload.files.length} arquivo(s) registrada por ${$('#contributor').selectedOptions[0].textContent}.`,'success');toast('Projeto atualizado no GitHub.');playSound('success')}catch(err){log(`GitHub: ${err.message}. Configure o .env na Vercel.`,'error');toast(err.message,'error')}};$('#clearTerminal').onclick=()=>refs.terminal.innerHTML='';
$('#filesToggle').onclick=()=>refs.grid.classList.toggle('explorer-open');
$('#settingsBtn').onclick=()=>{$('#preferencesPopover').hidden=false;$('#soundEnabled').checked=audioSettings.enabled;$('#soundVolume').value=audioSettings.volume};$('#closePreferences').onclick=()=>$('#preferencesPopover').hidden=true;$('#soundEnabled').onchange=e=>{audioSettings.enabled=e.target.checked;saveAudioSettings();if(audioSettings.enabled)playSound('success')};$('#soundVolume').oninput=e=>{audioSettings.volume=Number(e.target.value);saveAudioSettings()};
$('#profileStack').onclick=e=>{const profile=e.target.closest('[data-user]');if(profile)openProfiles(profile.dataset.user)};$('#closeProfile').onclick=()=>$('#profilePanel').hidden=true;$('#contributor').onchange=e=>toast(`Atualizações atribuídas a ${e.target.selectedOptions[0].textContent}`);
document.addEventListener('keydown',e=>{const modifier=e.ctrlKey||e.metaKey;if(modifier&&e.key.toLowerCase()==='s'){e.preventDefault();saveActive();toast('Rascunho salvo neste navegador');playSound('success')}if(e.key==='F2'&&!e.target.matches('input,textarea,select')){e.preventDefault();const file=currentFile();if(file)renameFile(file)}if(e.key==='Escape'){$('#fileContextMenu').hidden=true;$('#blockContextMenu').hidden=true;$('#profilePanel').hidden=true;$('#preferencesPopover').hidden=true}if(refs.workspace.contains(document.activeElement)&&modifier&&['c','x'].includes(e.key.toLowerCase())&&state.selected){const block=state.blocks.find(b=>b.id===state.selected);if(block){state.blockClipboard=structuredClone(block);if(e.key.toLowerCase()==='x'){e.preventDefault();deleteSelected()}}}if(refs.workspace.contains(document.activeElement)&&modifier&&e.key.toLowerCase()==='v'&&state.blockClipboard){e.preventDefault();snapshot();state.blocks.push({...structuredClone(state.blockClipboard),id:uid('block')});renderBlocks();blocksToCode();saveActive();playSound('snap')}if(refs.workspace.contains(document.activeElement)&&modifier&&e.key.toLowerCase()==='d'&&state.selected){e.preventDefault();const index=state.blocks.findIndex(b=>b.id===state.selected);if(index>=0){snapshot();const copy={...structuredClone(state.blocks[index]),id:uid('block')};state.blocks.splice(index+1,0,copy);state.selected=copy.id;renderBlocks();blocksToCode();saveActive();playSound('snap')}}});

(async function init(){await loadPybricksCatalog();renderCategories();renderLibrary();let saved;try{saved=JSON.parse(localStorage.getItem('garca-studio-project'))}catch{}if(saved?.version===3&&saved.project){state.project=saved.project;state.activeFileId=saved.activeFileId}else{localStorage.removeItem('garca-studio-project');state.project=createProject();state.activeFileId=state.project.files.find(f=>f.path==='missions/saida_1.py').id}state.project.deletedPaths||=[];renderFileTree();openFile(state.activeFileId);analyzeProject();log('Projeto virtual carregado. Rascunhos são salvos automaticamente.','info');log('Nenhum código pronto foi inserido. Escolha blocos ou Python para começar.','success')})();
