$(() => {

  const $resetButton = $('.resetButton');
  // ==================================================
  // const leftHPWidth = leftHPValue * 45;
  // const leftAttackWidth = leftAVValue * 45;
  // const leftDefWidth = leftDVValue * 45;
  // const leftHealWidth = leftHVValue * 45;
  // const rightHPWidth = rightHPValue * 45;
  // const rightAttackWidth = rightAVValue * 45;
  // const rightDefWidth = rightDVValue * 45;
  // const rightHealWidth = rightHVValue * 45;

  // ====================CONSTRUCTOR====================================
  const player = new Player(
    '/images/nicolas-cage.gif',
    'Nicolas Cage',
    10,
    3,
    4,
    3,
    '/images/player-wins.gif',
    '/images/player-lose.gif',
    'left'
  );
  const david = new Player(
    '/images/david-hasselhoff.gif',
    'David Hasselhoff',
    10,
    3,
    4,
    3,
    '/images/hoff-wins.gif',
    '/images/hoff-loses.gif',
    'right'
  );
  const godMode = new Player(
    '/images/chuck-norris.gif',
    'Chuck Norris',
    10,
    10,
    10,
    10,
    '/images/chuck-norris-win.gif',
    '/images/player-give-up.gif',
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
    this.text = $(`.bottomSpacer${side}Char`);
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
        enemy.character.toggleClass('animated shake');
        enemy.hpValue = enemy.hpValue - (this.avValue - enemy.dvValue);
        if(enemy.hpValue <= 0){
          player.disableButtons(true);
          winSound();
          this.zeroWidth(enemy);
          this.charText('Your attack killed the enemy!');
          this.charLost(enemy);
        }
        this.changes(enemy.hpValue, enemy.hpBar);
        this.halfAttack();
        this.changes(this.avValue, this.avBar);
        this.charText(`You attacked with ${((this.avValue * 2) - enemy.dvValue)} damage!`);

      } else {
        this.halfAttack();
        this.changes(this.avValue, this.avBar);
        this.charText('You did no damage!');
      }
    };
    this.halfAttack = function(){
      if(norrisIsAlive === false) this.avValue = this.avValue / 2;
      if(norrisIsAlive === true) console.log('I\'m a god');
    };
    this.charge = function(){
      this.character.toggleClass('animated tada');
      chargeSound();
      this.turnOnLights('grey');
      this.avValue = this.avValue * 2;
      if(this.avValue > 10){
        this.avValue = 10;
        this.changes(this.avValue, this.avBar);
        this.charText('Your attack is at maximum!');
        console.log('this is my avValue afer charge', this.avValue);
      } else {
        this.changes(this.avValue, this.avBar);
        this.charText('Player charged this turn, doubling his/her attack');
      }
    };
    this.heal = function(){
      this.character.toggleClass('animated pulse');
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
      this.text.text(text);

    };
    this.changes = function(value, bar){
      const change = value * 45;
      bar.css('width', `${change}px`);
    };
    this.charLost = function(enemy){
      this.img.attr('src', this.winPhoto);
      enemy.img.attr('src', this.losePhoto);
    };
    this.zeroWidth = function(enemy){
      enemy.hpBar.css('width', '0px');
      enemy.avBar.css('width', '0px');
      enemy.dvBar.css('width', '0px');
      enemy.hvBar.css('width', '0px');
    };
    this.onLoad = function(){
      this.imageName();
      this.valueText();
      this.setValues();
      this.setBars();
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
    setNorris(true);
    godMode.onLoad();
    player.charText('NOPE');
    godMode.charText('Chuck Norris doesn\'t battle, he just allows you to lose');
    godMode.stats.css('font-size', '20px');
  }
  ////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////
  // ===================SOUNDS================================
  bgm();
  function bgm(){
    const bgmSound = new Audio('/audio/bgm.mp3');
    bgmSound.volume = 0.5;
    bgmSound.autoplay = true;
    bgmSound.loop = true;
    bgmSound.currentTime = 0;
  }
  function attackSound(){
    const attackSound = new Audio('/audio/attack.mp3');
    attackSound.volume = 0.3;
    attackSound.play();
    attackSound.currentTime = 0;
  }
  function chargeSound(){
    const chargeSound = new Audio('/audio/charge.mp3');
    chargeSound.volume = 0.3;
    chargeSound.play();
    chargeSound.currentTime = 0;
  }
  function healSound(){
    const healSound = new Audio('/audio/heal.mp3');
    healSound.volume = 0.3;
    healSound.play();
    healSound.currentTime = 0;
  }
  function winSound(){
    const winSound = new Audio('/audio/win.mp3');
    winSound.play();
    winSound.currentTime = 3;

  }
  // =====================ENEMY LOGIC============================
  function enemyTurn(enemy){
    if(enemy.hpValue <= 0){
      console.log('lost');
    } else {
      if(enemy.hpValue < 6){
        enemy.heal();
      } else if(enemy.avValue < 4){
        enemy.charge();
      } else if(enemy.hpValue > 5 && enemy.avValue > 5){
        enemy.attack(player);
      } else {
        enemy.attack(player);
      }
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
    player.disableButtons(false);
    player.turnOnLights('black');
    david.turnOnLights('black');
    player.onLoad();
    if(david.hpValue <= 0 && norrisIsAlive === false){
      releaseChuckNorris();
    } else {
      david.onLoad();
      player.text.text('I think I jump around more when I\'m alone.');
      david.text.text('We made sure nobody died on the show. We made sure nobody ever drowned on \'Baywatch\'.');
      setNorris(false);
    }
  }
});
