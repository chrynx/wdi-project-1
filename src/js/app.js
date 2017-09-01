$(() => {

  const $resetButton = $('.resetButton');
  // ==================================================
  // ====================CONSTRUCTOR====================================
  const player = new Player(
    '/public/images/nicolas-cage.gif',
    'Nicolas Cage',
    10,
    3,
    4,
    3,
    '/public/images/player-wins.gif',
    '/public/images/player-lose.gif',
    'left'
  );
  const david = new Player(
    '/public/images/david-hasselhoff.gif',
    'David Hasselhoff',
    10,
    4,
    4,
    4,
    '/public/images/hoff-wins.gif',
    '/public/images/hoff-loses.gif',
    'right'
  );
  const godMode = new Player(
    '/public/images/chuck-norris.gif',
    'Chuck Norris',
    10,
    10,
    10,
    10,
    '/public/images/chuck-norris-win.gif',
    '/public/images/player-give-up.gif',
    'right'
  );
  player.onLoad();
  david.onLoad();
  function Player(imgsrc, name, hp, av, dv, hv, winPhoto, losePhoto, side){
    this.lights = $(`.${side}Lights`);
    this.character = $(`.${side}Character`);
    this.img = $(`.${side}Img`);
    this.imgsrc = imgsrc;
    this.nameArea = $(`.${side}Name`);
    this.name = name;
    this.stats = $(`.${side}Stats`);
    this.hpArea = $(`.${side}HPValue`);
    this.hp = hp;
    this.avArea = $(`.${side}AVValue`);
    this.av = av;
    this.dvArea = $(`.${side}DVValue`);
    this.dv = dv;
    this.hvArea = $(`.${side}HVValue`);
    this.hv = hv;
    this.attButton = $(`.${side}AttackButton`);
    this.chargeButton = $(`.${side}ChargeButton`);
    this.healButton = $(`.${side}HealButton`);
    this.hpBar = $(`.${side}HPBar`);
    this.avBar = $(`.${side}AttackBar`);
    this.dvBar = $(`.${side}DefBar`);
    this.hvBar = $(`.${side}HealBar`);
    this.chat = $(`.bottomSpacer${side}Char`);
    this.winPhoto = winPhoto;
    this.losePhoto = losePhoto;
    this.turnOnLights = function(color) {
      this.lights.css('background-color', color);
    };
    this.setBars = function() {
      this.hpBar.css('width', `${this.hp * 45}`);
      this.avBar.css('width', `${this.av * 45}`);
      this.dvBar.css('width', `${this.dv * 45}`);
      this.hvBar.css('width', `${this.hv * 45}`);
    };
    this.setValues = function() {
      this.hpValue = this.hp;
      this.avValue = this.av;
      this.dvValue = this.dv;
      this.hvValue = this.hv;
    };
    this.valueText = function(){
      this.hpArea.text(this.hp);
      this.avArea.text(this.av);
      this.dvArea.text(this.dv);
      this.hvArea.text(this.hv);
    };
    this.attack = function(enemy){
      attackSound();
      this.turnOnLights('red');
      if((this.avValue - enemy.dvValue) > 0){
        enemy.hpValue = enemy.hpValue - (this.avValue - enemy.dvValue);
        this.changes(enemy.hpValue, enemy.hpBar);
        this.halfAttack();
        this.changes(this.avValue, this.avBar);
        this.charText(`You attacked with ${((this.avValue * 2) - enemy.dvValue)} damage!`);
        if(enemy.hpValue <= 0){
          player.disableButtons(true);
          winSound();
          this.charText('Your attack killed the enemy!');
          this.charLost(enemy);
        }
      } else {
        this.charText('You did no damage!');
      }
    };
    this.halfAttack = function(){
      this.avValue = this.avValue / 2;
    };
    this.charge = function(){
      chargeSound();
      this.turnOnLights('grey');
      this.avValue = this.avValue * 2;
      if(this.avValue >= 10){
        this.avValue = 10;
        this.changes(this.avValue, this.avBar);
        this.charText('Your attack is at maximum!');
      } else {
        this.changes(this.avValue, this.avBar);
        this.charText('You charged this turn, doubling your attack');
      }
    };
    this.heal = function(){
      healSound();
      this.turnOnLights('green');
      this.hpValue = this.hpValue + this.hvValue;
      if(this.hpValue > 10){
        this.hpValue = 10;
        this.changes(this.hpValue, this.hpBar);
        this.charText('You are on maximum health!');
      } else {
        this.changes(this.hpValue, this.hpBar);
        this.charText(`You healed ${this.hvValue} damage`);
      }
    };
    this.disableButtons = function(argument){
      this.attButton.prop('disabled', argument);
      this.chargeButton.prop('disabled', argument);
      this.healButton.prop('disabled', argument);
    };
    this.imageName = function(){
      this.img.attr('src', this.imgsrc);
      this.nameArea.text(this.name);
    };
    this.charText = function(text){
      this.chat.text(text);

    };
    this.changes = function(value, bar){
      const change = value * 45;
      bar.css('width', `${change}px`);
    };
    this.charLost = function(enemy){
      this.img.attr('src', this.winPhoto);
      enemy.img.attr('src', this.losePhoto);
    };
    this.onLoad = function(){
      this.imageName();
      this.setValues();
      this.setBars();
      this.valueText();

    };
  }
  // =================DANGER ZONE=============================
  ////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////
  function setNorris(argument){
    norrisIsAlive = argument;
  }
  let norrisIsAlive = false;
  function releaseChuckNorris(){
    godMode.onLoad();
    player.charText('NOPE');
    godMode.charText('Chuck Norris doesn\'t battle, he just allows you to lose');
    godMode.stats.css('font-size', '20px');
    setNorris(true);
  }
  ////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////
  // ===================SOUNDS================================
  bgm();
  function bgm(){
    const bgmSound = new Audio('/public/audio/buddha.mp3');
    bgmSound.volume = 0.5;
    bgmSound.autoplay = true;
    bgmSound.loop = true;
    bgmSound.currentTime = 0;
  }
  function attackSound(){
    const attackSound = new Audio('/public/audio/attack.mp3');
    attackSound.volume = 0.3;
    attackSound.play();
    attackSound.currentTime = 0;
  }
  function chargeSound(){
    const chargeSound = new Audio('/public/audio/charge.mp3');
    chargeSound.volume = 0.3;
    chargeSound.play();
    chargeSound.currentTime = 2;
  }
  function healSound(){
    const healSound = new Audio('/public/audio/heal.mp3');
    healSound.volume = 0.3;
    healSound.play();
    healSound.currentTime = 2;
  }
  const win = new Audio('/public/audio/win.mp3');
  function winSound(){
    win.play();
    win.currentTime = 8;
  }
  // =====================ENEMY LOGIC============================
  function enemyTurn(enemy){
    if(enemy.hpValue > 0){
      if(enemy.hpValue < 5){
        enemy.heal();
      } else if(enemy.avValue <= 4 && enemy.hpValue > 6){
        enemy.charge();
      } else if((enemy.avValue - player.dvValue) <= 0){
        enemy.charge();
      } else {
        enemy.attack(player);
      }
    } else {
      console.log('lost');
    }
  }
  // ========================BUTTONS============================
  player.attButton.on('click', function (){
    if(norrisIsAlive === false)player.attack(david); enemyTurn(david);
    if(norrisIsAlive === true)player.attack(godMode); enemyTurn(godMode);
  });
  player.chargeButton.on('click', function (){
    player.charge();
    if(norrisIsAlive === false)enemyTurn(david);
    if(norrisIsAlive === true)enemyTurn(godMode);
  });
  player.healButton.on('click', function (){
    player.heal();
    if(norrisIsAlive === false)enemyTurn(david);
    if(norrisIsAlive === true)enemyTurn(godMode);
  });
  // ========================RESET================================
  $resetButton.on('click', resetAll);
  function resetAll(){
    win.pause();
    win.currentTime = 8;
    player.disableButtons(false);
    player.turnOnLights('black');
    david.turnOnLights('black');
    player.onLoad();
    if(david.hpValue <= 0 && norrisIsAlive === false){
      releaseChuckNorris();
    } else {
      david.onLoad();
      setNorris(false);
      david.stats.css('font-size', '25px');
      player.charText('I think I jump around more when I\'m alone.');
      david.charText('We made sure nobody died on the show. We made sure nobody ever drowned on \'Baywatch\'.');
    }
  }
});
