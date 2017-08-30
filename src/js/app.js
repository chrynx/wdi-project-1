$(() => {
  // ==================VARIABLES========================
  const $leftCharacter = $('.leftCharacter');
  const $leftImg = $('.leftImg');
  const $leftHPValue = $('.leftHPValue');
  const $leftAVValue = $('.leftAVValue');
  const $leftDVValue = $('.leftDVValue');
  const $leftHVValue = $('.leftHVValue');
  const $leftName = $('.leftName');
  const $leftAttackButton = $('.leftAttackButton');
  const $leftChargeButton = $('.leftChargeButton');
  const $leftHealButton = $('.leftHealButton');
  const $leftHPBar = $('.leftHPBar');
  const $leftAttackBar = $('.leftAttackBar');
  const $leftDefBar = $('.leftDefBar');
  const $leftHealBar = $('.leftHealBar');
  const $leftLights = $('.leftLights');
  // =================CHARACTERS==================
  const nicolasCage = {
    name: 'Nicolas Cage',
    HP: 10,
    AV: 3,
    DV: 4,
    HV: 3,
    image: '/images/nicolas-cage.gif'
  };
  const davidHasselhoff = {
    name: 'David Hasselhoff',
    HP: 10,
    AV: 3,
    DV: 4,
    HV: 3,
    image: '/images/david-hasselhoff.gif'
  };
  const chuckNorris = {
    image: '/images/chuck-norris.gif',
    name: 'Chuck Norris',
    HP: 10,
    AV: 10,
    DV: 10,
    HV: 10
  };
  // =========================================================
  const $rightCharacter = $('.rightCharacter');
  const $rightHPBar = $('.rightHPBar');
  const $rightAttackBar = $('.rightAttackBar');
  const $rightDefBar = $('.rightDefBar');
  const $rightHealBar = $('.rightHealBar');
  const $rightImg = $('.rightImg');
  const $rightStats = $('.rightStats');
  const $rightHPValue = $('.rightHPValue');
  const $rightAVValue = $('.rightAVValue');
  const $rightDVValue = $('.rightDVValue');
  const $rightHVValue = $('.rightHVValue');
  const $rightName = $('.rightName');
  const $rightLights = $('.rightLights');
  // ===============================================================
  const $bottomLeftChar = $('.bottomSpacerLeftChar');
  const $bottomRightChar = $('.bottomSpacerRightChar');
  const $resetButton = $('.resetButton');
  // ==================================================
  let leftHPValue = nicolasCage.HP;
  let leftAVValue = nicolasCage.AV;
  const leftDVValue = nicolasCage.DV;
  const leftHVValue = nicolasCage.HV;
  let rightHPValue = davidHasselhoff.HP;
  let rightAVValue = davidHasselhoff.AV;
  let rightDVValue = davidHasselhoff.DV;
  let rightHVValue = davidHasselhoff.HV;
  const leftHPWidth = leftHPValue * 45;
  const leftAttackWidth = leftAVValue * 45;
  const leftDefWidth = leftDVValue * 45;
  const leftHealWidth = leftHVValue * 45;
  const rightHPWidth = rightHPValue * 45;
  const rightAttackWidth = rightAVValue * 45;
  const rightDefWidth = rightDVValue * 45;
  const rightHealWidth = rightHVValue * 45;

  // =================DANGER ZONE=======================
  let norrisIsAlive = false;
  // ===================SOUNDS========================
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
  // ===================FUNCTIONS=======================
  function onLoad(){
    $leftHPBar.css('width', `${leftHPWidth}px`);
    $leftAttackBar.css('width', `${leftAttackWidth}px`);
    $leftDefBar.css('width', `${leftDefWidth}px`);
    $leftHealBar.css('width', `${leftHealWidth}px`);
    $rightHPBar.css('width', `${rightHPWidth}px`);
    $rightAttackBar.css('width', `${rightAttackWidth}px`);
    $rightDefBar.css('width', `${rightDefWidth}px`);
    $rightHealBar.css('width', `${rightHealWidth}px`);
    david();
    nicolas();
    bgm();
  }
  function disableButtons() {
    $leftAttackButton.prop('disabled', true);
    $leftChargeButton.prop('disabled', true);
    $leftHealButton.prop('disabled', true);
  }
  function enableButtons() {
    $leftAttackButton.prop('disabled', false);
    $leftChargeButton.prop('disabled', false);
    $leftHealButton.prop('disabled', false);
  }
  // ============TEMPORARY FUNCTIONS==========
  function leftValues(character){
    leftHPValue = character.HP;
    leftAVValue = character.AV;
  }
  function leftValueText(character){
    $leftHPValue.text(character.HP);
    $leftAVValue.text(character.AV);
    $leftDVValue.text(character.DV);
    $leftHVValue.text(character.HV);
  }
  function leftImageName(character){
    $leftImg.attr('src', character.image);
    $leftName.text(character.name);
  }
  function leftBars(character){
    $leftHPBar.css('width', `${character.HP * 45}`);
    $leftAttackBar.css('width', `${character.AV * 45}`);
    $leftDefBar.css('width', `${character.DV * 45}`);
    $leftHealBar.css('width', `${character.HV * 45}`);
  }
  function leftCharText(text){
    $bottomLeftChar.text(text);
  }
  function rightValues(character){
    rightHPValue = character.HP;
    rightAVValue = character.AV;
    rightDVValue = character.DV;
    rightHVValue = character.HV;
  }
  function rightValueText(character){
    $rightHPValue.text(character.HP);
    $rightAVValue.text(character.AV);
    $rightDVValue.text(character.DV);
    $rightHVValue.text(character.HV);
  }
  function rightBars(character){
    $rightHPBar.css('width', `${character.HP * 45}`);
    $rightAttackBar.css('width', `${character.AV * 45}`);
    $rightDefBar.css('width', `${character.DV * 45}`);
    $rightHealBar.css('width', `${character.HV * 45}`);
  }
  function rightImageName(character){
    $rightImg.attr('src', character.image);
    $rightName.text(character.name);
  }
  function rightCharText(text){
    $bottomRightChar.text(text);
  }
  function setLeftLights(color){
    $leftLights.css('background-color', color);
  }
  function setRightLights(color){
    $rightLights.css('background-color', color);
  }
  function setNorris(argument){
    norrisIsAlive = argument;
  }
  // ======================================
  function resetAll(){
    enableButtons();
    setLeftLights('black');
    setRightLights('black');
    leftBars(nicolasCage);
    leftImageName(nicolasCage);
    leftValues(nicolasCage);
    if(rightHPValue === 0 && norrisIsAlive === false){
      releaseChuckNorris();
    } else {
      rightBars(davidHasselhoff);
      rightImageName(davidHasselhoff);
      leftCharText('I think I jump around more when I\'m alone.');
      rightCharText('We made sure nobody died on the show. We made sure nobody ever drowned on \'Baywatch\'.');
      rightValues(davidHasselhoff);
      rightValueText(davidHasselhoff);
      setNorris(false);
    }
  }
  function releaseChuckNorris(){
    setNorris(true);
    leftCharText('NOPE');
    rightCharText('Chuck Norris doesn\'t battle, He just allows you to lose');
    rightImageName(chuckNorris);
    rightValues(chuckNorris);
    rightValueText(chuckNorris);
    rightBars(chuckNorris);
    $rightStats.css('font-size', '20px');
  }
  function leftCharLost() {
    $leftImg.attr('src', '/images/player-lose.gif');
    $rightImg.attr('src', '/images/hoff-wins.gif');
  }
  function rightCharLost() {
    $leftImg.attr('src', '/images/player-wins.gif');
    $rightImg.attr('src', '/images/hoff-loses.gif');
  }
  // ==========================ANIMATIONS==========================
  function leftAttack(){
    $rightCharacter.toggleClass('animated shake');
  }
  function rightAttack(){
    $leftCharacter.toggleClass('animated shake');

  }
  function leftHeal(){
    $leftCharacter.toggleClass('animated pulse');
  }
  function rightHeal(){
    $rightCharacter.toggleClass('animated pulse');
  }
  function leftCharge(){
    $leftCharacter.toggleClass('animated tada');
  }
  function rightCharge(){
    $rightCharacter.toggleClass('animated tada');
  }
  // ================SMALL FUNCTIONS=======================
  function leftHalfAttack(){
    leftAVValue = leftAVValue / 2;
  }
  function rightHalfAttack(){
    rightAVValue = rightAVValue / 2;
  }
  function attackDegrade(value, bar){
    const attackDegrade = value * 45;
    bar.css('width', `${attackDegrade}px`);
  }
  function remainingHP(value, bar){
    const remainingHP = value * 45;
    bar.css('width', `${remainingHP}px`);
  }
  function doubleAttack(value, bar){
    const doubleAttack = value * 45;
    bar.css('width', `${doubleAttack}px`);
  }
  function healHP(value, bar){
    const healHP = value * 45;
    bar.css('width', `${healHP}px`);
  }
  function setRightWidthZero(){
    $rightHPBar.css('width', '0px');
    $rightAttackBar.css('width', '0px');
    $rightDefBar.css('width', '0px');
    $rightHealBar.css('width', '0px');
  }
  // ================PLAYER FUNCTIONS==============
  function playerAttack(){
    attackSound();
    setLeftLights('red');
    if((leftAVValue - rightDVValue) > 0){
      leftAttack();
      rightHPValue = rightHPValue - (leftAVValue - rightDVValue);
      remainingHP(rightHPValue, $rightHPBar);
      // ------------------
      leftHalfAttack();
      attackDegrade(leftAVValue, $leftAttackBar);
      leftCharText(`You attacked with ${((leftAVValue * 2) - rightDVValue)} damage!`);
      // -------------------
      if(rightHPValue <= 0){
        winSound();
        setRightWidthZero();
        leftCharText('Your attack killed the enemy!');
        rightCharLost();
        disableButtons();
      }
    } else {
      leftHalfAttack();
      attackDegrade(leftAVValue, $leftAttackBar);
      leftCharText('You did no damage!');
    }
    hoffTurn();
  }
  function playerCharge(){
    chargeSound();
    setLeftLights('grey');
    leftAVValue = leftAVValue * 2;
    leftCharge();
    if(leftAVValue > 10){
      leftAVValue = 10;
      doubleAttack(leftAVValue, $leftAttackBar);
      leftCharText('Your attack is at maximum!');
    } else {
      doubleAttack(leftAVValue, $leftAttackBar);
      leftCharText('Player charged this turn, doubling his/her attack');
    }
    hoffTurn();
  }
  function playerHeal(){
    healSound();
    setLeftLights('green');
    leftHPValue = leftHPValue + leftHVValue;
    leftHeal();
    if(leftHPValue > 10){
      leftHPValue = 10;
      healHP(leftHPValue, $leftHPBar);
      leftCharText('You are on maximum health!');
    } else {
      healHP(leftHPValue, $leftHPBar);
      leftCharText(`You healed ${leftHVValue} damage`);
    }
    hoffTurn();
  }
  // ==================HOFF FUNCTIONS==================
  function hoffTurn() {
    if(rightHPValue > 0){
      if(rightHPValue < 6){
        hoffHeal();
      }else if(rightAVValue === 10){
        hoffAttack();
      }else {
        hoffCharge();
      }
    }else {
      rightCharText('THE HOFF HAS LOST!');
    }
  }
  function hoffAttack(){
    attackSound();
    setRightLights('red');
    if((rightAVValue - leftDVValue) > 0){
      rightAttack();
      leftHPValue = leftHPValue - (rightAVValue - leftDVValue);
      remainingHP(leftHPValue, $leftHPBar);
      // --------------------
      if(norrisIsAlive === false) rightHalfAttack();
      attackDegrade(rightAVValue, $rightAttackBar);
      if(norrisIsAlive === false)rightCharText(`The Hoff attacked with ${((rightAVValue * 2) - leftDVValue)} damage!`);
      if(norrisIsAlive === true)rightCharText(`Chuck Norris attacked with ${((rightAVValue) - leftDVValue)} damage!`);
      // --------------------------
      if(leftHPValue <= 0){
        $leftAttackBar.css('width', '0px');
        $leftDefBar.css('width', '0px');
        $leftHealBar.css('width', '0px');
        leftCharLost();
        disableButtons();
      }
    } else {
      if(norrisIsAlive === false)rightHalfAttack();
      attackDegrade(rightAVValue, $rightAttackBar);
    }
  }
  function hoffCharge(){
    chargeSound();
    setRightLights('grey');
    rightAVValue = rightAVValue * 2;
    rightCharge();
    if(rightAVValue > 10){
      rightAVValue = 10;
      doubleAttack(rightAVValue, $rightAttackBar);
      if(norrisIsAlive === false)rightCharText('The Hoff charged this round, doubling his attack!');
      if(norrisIsAlive === true)rightCharText('Chuck Norris charged this round, doubling his attack!');
    } else {
      doubleAttack(rightAVValue, $rightAttackBar);
      if(norrisIsAlive === false)rightCharText('The Hoff charged this round, doubling his attack!');
      if(norrisIsAlive === true)rightCharText('Chuck Norris charged this round, doubling his attack!');
    }
  }
  function hoffHeal(){
    healSound();
    setRightLights('green');
    rightHPValue = rightHPValue + rightHVValue;
    rightHeal();
    if(rightHPValue > 10){
      rightHPValue = 10;
      healHP(rightHPValue, $rightHPBar);
      if(norrisIsAlive === false)rightCharText('The Hoff is on maximum health!');
      if(norrisIsAlive === true)rightCharText('Chuck Norris is on maximum health!');

    } else {
      healHP(rightHPValue, $rightHPBar);
      if(norrisIsAlive === false)rightCharText(`The Hoff healed ${rightHVValue} damage`);
      if(norrisIsAlive === true)rightCharText('Chuck Norris is a god and cannot be harmed');
    }
  }
  // ================ONLOAD CHARACTERS====================
  function david(){
    rightImageName(davidHasselhoff);
    rightValueText(davidHasselhoff);
  }
  function nicolas(){
    leftImageName(nicolasCage);
    leftValueText(nicolasCage);
  }
  // =======================ACTIONS=====================
  onLoad();
  // ====================LEFT BUTTONS=====================
  $leftAttackButton.on('click', playerAttack);
  $leftChargeButton.on('click', playerCharge);
  $leftHealButton.on('click', playerHeal);
  // ================================================
  $resetButton.on('click', resetAll);
});
