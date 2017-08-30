$(() => {
  // ==================VARIABLES========================
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
    AV: 4,
    DV: 4,
    HV: 4,
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
  const $rightHPBar = $('.rightHPBar');
  const $rightAttackBar = $('.rightAttackBar');
  const $rightDefBar = $('.rightDefBar');
  const $rightHealBar = $('.rightHealBar');
  const $rightImg = $('.rightImg');
  const $rightHP = $('.rightHP');
  const $rightHPValue = $('.rightHPValue');
  const $rightAV = $('.rightAV');
  const $rightAVValue = $('.rightAVValue');
  const $rightDV = $('.rightDV');
  const $rightDVValue = $('.rightDVValue');
  const $rightHV = $('.rightHV');
  const $rightHVValue = $('.rightHVValue');
  const $rightName = $('.rightName');
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
  // ===================================================

  // ===================FUNCTIONS=======================
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
  function resetAll(){
    enableButtons();
    $leftHPBar.css('width', `${nicolasCage.HP * 45}`);
    $rightHPBar.css('width', `${davidHasselhoff.HP * 45}`);
    $leftAttackBar.css('width', `${nicolasCage.AV * 45}`);
    $rightAttackBar.css('width', `${davidHasselhoff.AV * 45}`);
    $leftImg.attr('src', nicolasCage.image);
    $rightImg.attr('src', davidHasselhoff.image);
    leftHPValue = nicolasCage.HP;
    leftAVValue = nicolasCage.AV;
    rightHPValue = davidHasselhoff.HP;
    rightAVValue = davidHasselhoff.AV;
    if(norrisIsAlive === false)releaseChuckNorris();
    else norrisIsAlive = true;
  }
  function releaseChuckNorris(){
    norrisIsAlive = false;
    $rightImg.attr('src', chuckNorris.image);
    $rightName.text(chuckNorris.name);
    rightHPValue = chuckNorris.HP;
    rightAVValue = chuckNorris.AV;
    rightDVValue = chuckNorris.DV;
    rightHVValue = chuckNorris.HV;
    $rightHPValue.text(chuckNorris.HP);
    $rightAVValue.text(chuckNorris.AV);
    $rightDVValue.text(chuckNorris.DV);
    $rightHVValue.text(chuckNorris.HV);
    $rightHPBar.css('width', `${chuckNorris.HP * 45}`);
    $rightAttackBar.css('width', `${chuckNorris.AV * 45}`);
    $rightDefBar.css('width', `${chuckNorris.DV * 45}`);
    $rightHealBar.css('width', `${chuckNorris.HV * 45}`);
    $rightHP.css('margin': 'auto 4px', 'padding': 'auto 5px');
    $rightAV.css('margin': 'auto 4px', 'padding': 'auto 5px');
    $rightDV.css('margin': 'auto 4px', 'padding': 'auto 5px');
    $rightHV.css('margin': 'auto 4px', 'padding': 'auto 5px');
    $rightHPValue.css('margin': 'auto 4px', 'padding': 'auto 5px');
    $rightAVValue.css('margin': 'auto 4px', 'padding': 'auto 5px');
    $rightDVValue.css('margin': 'auto 4px', 'padding': 'auto 5px');
    $rightHVValue.css('margin': 'auto 4px', 'padding': 'auto 5px');
  }
  function leftCharLost() {
    $leftImg.attr('src', '/images/player-lose.gif');
    $rightImg.attr('src', '/images/hoff-wins.gif');
  }
  function rightCharLost() {
    $leftImg.attr('src', '/images/player-wins.gif');   $rightImg.attr('src', '/images/hoff-loses.gif');
  }
  // =======================================
  function playerAttack(){
    console.log('left attack');
    if((leftAVValue - rightDVValue) > 0){
      rightHPValue = rightHPValue - (leftAVValue - rightDVValue);
      const remainingHP = rightHPValue * 45;
      $rightHPBar.css('width', `${remainingHP}px`);
      // ------------------
      leftAVValue = leftAVValue / 2;
      const attackDegrade = leftAVValue * 45;
      $leftAttackBar.css('width', `${attackDegrade}px`);
      $bottomLeftChar.text(`You attacked with ${((leftAVValue * 2) - rightDVValue)} damage!`);
      // -------------------
      if(rightHPValue <= 0){
        $bottomLeftChar.text('Your attack killed the enemy!');
        rightCharLost();
        disableButtons();
      }
    } else {
      leftAVValue = leftAVValue / 2;
      const attackDegrade = leftAVValue * 45;
      $leftAttackBar.css('width', `${attackDegrade}px`);
      $bottomLeftChar.text('You did no damage!');
    }
    hoffTurn();
  }
  function playerCharge(){
    console.log('left charge');
    leftAVValue = leftAVValue * 2;
    if(leftAVValue > 10){
      leftAVValue = 10;
      const doubleAttack = leftAVValue * 45;
      $leftAttackBar.css('width', `${doubleAttack}px`);
      $bottomLeftChar.text('Your attack is at maximum!');
    } else {
      const doubleAttack = leftAVValue * 45;
      $leftAttackBar.css('width', `${doubleAttack}px`);
      $bottomLeftChar.text('Player charged this turn, doubling his/her attack');
    }
    hoffTurn();
  }
  function playerHeal(){
    console.log('left heal');
    leftHPValue = leftHPValue + leftHVValue;
    if(leftHPValue > 10){
      leftHPValue = 10;
      const healHP = leftHPValue * 45;
      $leftHPBar.css('width', `${healHP}px`);
      $bottomLeftChar.text('You are on maximum health!');
    } else {
      const healHP = leftHPValue * 45;
      $leftHPBar.css('width', `${healHP}px`);
      $bottomLeftChar.text(`You healed ${leftHVValue} damage`);
    }
    hoffTurn();
  }
  // ==================HOFF FUNCTIONS==================
  function hoffTurn() {
    if(rightHPValue > 0){
      if(rightHPValue <= 5){
        hoffHeal();
      } else if(rightAVValue <= 4 && rightHPValue > 8){
        hoffCharge();
      } else if((rightAVValue - leftDVValue) < 2){
        hoffCharge();
      } else {
        hoffAttack();
      }
    }else {
      $bottomRightChar.text('THE HOFF HAS LOST!');
    }
  }
  function hoffAttack(){
    console.log('right attack');
    if((rightAVValue - leftDVValue) > 0){
      leftHPValue = leftHPValue - (rightAVValue - leftDVValue);
      const remainingHP = leftHPValue * 45;
      $leftHPBar.css('width', `${remainingHP}px`);
      // --------------------
      rightAVValue = rightAVValue / 2;
      const attackDegrade = rightAVValue * 45;
      $rightAttackBar.css('width', `${attackDegrade}px`);
      $bottomRightChar.text(`The Hoff attacked with ${((rightAVValue * 2) - leftDVValue)} damage!`);
      // --------------------------
      if(leftHPValue <= 0){
        leftCharLost();
        disableButtons();
      }
    } else {
      rightAVValue = rightAVValue / 2;
      const attackDegrade = rightAVValue * 45;
      $rightAttackBar.css('width', `${attackDegrade}px`);
      console.log('no damage');
    }
  }
  function hoffCharge(){
    console.log('right charge');
    rightAVValue = rightAVValue * 2;
    if(rightAVValue > 10){
      rightAVValue = 10;
      const doubleAttack = rightAVValue * 45;
      $rightAttackBar.css('width', `${doubleAttack}px`);
      $bottomRightChar.text('The Hoff charged this round, doubling his attack!');
    } else {
      const doubleAttack = rightAVValue * 45;
      $rightAttackBar.css('width', `${doubleAttack}px`);
      $bottomRightChar.text('The Hoff charged this round, doubling his attack!');
    }
  }
  function hoffHeal(){
    console.log('right heal');
    rightHPValue = rightHPValue + rightHVValue;
    if(rightHPValue > 10){
      rightHPValue = 10;
      const healHP = rightHPValue * 45;
      $rightHPBar.css('width', `${healHP}px`);
      $bottomRightChar.text('The Hoff is on maximum health!');

    } else {
      const healHP = rightHPValue * 45;
      $rightHPBar.css('width', `${healHP}px`);
      $bottomRightChar.text(`The Hoff healed ${rightHVValue} damage`);
    }
  }

  // ================ONLOAD CHARACTERS====================
  function david(){
    $rightImg.attr('src', davidHasselhoff.image);
    $rightName.text(davidHasselhoff.name);
    $rightHPValue.text(davidHasselhoff.HP);
    $rightAVValue.text(davidHasselhoff.AV);
    $rightDVValue.text(davidHasselhoff.DV);
    $rightHVValue.text(davidHasselhoff.HV);
  }
  function nicolas(){
    $leftImg.attr('src', nicolasCage.image);
    $leftName.text(nicolasCage.name);
    $leftHPValue.text(nicolasCage.HP);
    $leftAVValue.text(nicolasCage.AV);
    $leftDVValue.text(nicolasCage.DV);
    $leftHVValue.text(nicolasCage.HV);
  }
  // ===================CHUCK FUNCTIONS================
  // ======================================
  // function chuckNorris(){
  //   $rightImg.attr('src', '/images/chuck-norris.gif');
  //   $rightName.text('Chuck Norris');
  //   $rightHPValue.text('10');
  //   $rightAVValue.text('10');
  //   $rightDVValue.text('10');
  //   $rightHVValue.text('10');
  // }
  // =======================ACTIONS=====================
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

  // ====================LEFT BUTTONS=====================
  $leftAttackButton.on('click', playerAttack);
  $leftChargeButton.on('click', playerCharge);
  $leftHealButton.on('click', playerHeal);
  // ================================================
  $resetButton.on('click', resetAll);

});
