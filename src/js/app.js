$(() => {
  // ==================VARIABLES========================
  const $rightImg = $('.rightImg');
  const $leftImg = $('.leftImg');
  // const $leftPhoto = $('.leftPhoto');
  let $leftHPValue = parseInt($('.leftHPValue').text());
  let $leftAVValue = parseInt($('.leftAVValue').text());
  const $leftDVValue = parseInt($('.leftDVValue').text());
  // const $leftButtons = $('.leftButtons');
  const $leftAttackButton = $('.leftAttackButton');
  const $leftChargeButton = $('.leftChargeButton');
  const $leftEscapeButton = $('.leftEscapeButton');
  const $leftHPBar = $('.leftHPBar');
  const $leftAttackBar = $('.leftAttackBar');
  const $leftDefBar = $('.leftDefBar');
  const $rightHPBar = $('.rightHPBar');
  const $rightAttackBar = $('.rightAttackBar');
  const $rightDefBar = $('.rightDefBar');
  // const $rightPhoto = $('.rightPhoto');
  let $rightHPValue = parseInt($('.rightHPValue').text());
  let $rightAVValue = parseInt($('.rightAVValue').text());
  const $rightDVValue = parseInt($('.rightDVValue').text());
  // const $rightButtons = $('.rightButtons');
  const $rightAttackButton = $('.rightAttackButton');
  const $rightChargeButton = $('.rightChargeButton');
  const $rightEscapeButton = $('.rightEscapeButton');
  // const $rightFiller = $('.rightFiller');
  // const $bottomSpacer = $('.bottomSpacer');
  // const $bottomSpacerLeft = $('.bottomSpacerLeft');
  // const $bottomSpacerLeftChar = $('.bottomSpacerLeftChar');
  // const $bottomSpacerMiddle = $('.bottomSpacerMiddle');
  // const $bottomSpacerRightChar = $('.bottomSpacerRightChar');
  // const $bottomSpacerRight = $('.bottomSpacerRight');
  // const $footer = $('.footer');
  const $resetButton = $('.resetButton');
  // ==================================================
  const $leftHPWidth = $leftHPValue * 45;
  const $leftAttackWidth = $leftAVValue * 45;
  const $leftDefWidth = $leftDVValue * 45;
  const $rightHPWidth = $rightHPValue * 45;
  const $rightAttackWidth = $rightAVValue * 45;
  const $rightDefWidth = $rightDVValue * 45;
  // ===================FUNCTIONS=======================
  function disableLeftButtons() {
    $leftAttackButton.prop('disabled', true);
    $leftChargeButton.prop('disabled', true);
    $leftEscapeButton.prop('disabled', true);
    $rightAttackButton.prop('disabled', false);
    $rightChargeButton.prop('disabled', false);
    $rightEscapeButton.prop('disabled', false);
  }
  function disableRightButtons() {
    $rightAttackButton.prop('disabled', true);
    $rightChargeButton.prop('disabled', true);
    $rightEscapeButton.prop('disabled', true);
    $leftAttackButton.prop('disabled', false);
    $leftChargeButton.prop('disabled', false);
    $leftEscapeButton.prop('disabled', false);
  }
  function disableButtons() {
    $rightAttackButton.prop('disabled', true);
    $rightChargeButton.prop('disabled', true);
    $rightEscapeButton.prop('disabled', true);
    $leftAttackButton.prop('disabled', true);
    $leftChargeButton.prop('disabled', true);
    $leftEscapeButton.prop('disabled', true);
  }
  function resetAll() {
    disableRightButtons();
    $leftHPValue = $('.leftHPValue').text();
    $leftAVValue = $('.leftAVValue').text();
    $rightHPValue = $('.rightHPValue').text();
    $rightAVValue = $('.rightAVValue').text();
    $leftHPBar.css('width', `${$leftHPWidth}px`);
    $leftAttackBar.css('width', `${$leftAttackWidth}px`);
    $leftDefBar.css('width', `${$leftDefWidth}px`);
    $rightHPBar.css('width', `${$rightHPWidth}px`);
    $rightAttackBar.css('width', `${$rightAttackWidth}px`);
    $rightDefBar.css('width', `${$rightDefWidth}px`);
    $rightImg.attr('src', 'http://iruntheinternet.com/lulzdump/images/nicolas-cage-fells-good-con-air-head-space-1409843288n.gif?id=');
    $leftImg.attr('src', 'http://31.media.tumblr.com/9afa643a997c615f0633199661819855/tumblr_mhxm0g4eRf1qicagco1_400.gif');

  }
  function leftCharLost() {
    $rightImg.attr('src', 'https://m.popkey.co/ed604e/b0vK1_s-200x150.gif?c=popkey-web&p=usa_network&i=suits-ent&l=search&f=.gif');
    $leftImg.attr('src', 'http://vignette2.wikia.nocookie.net/injusticegodsamongus/images/c/c3/I_win.gif/revision/latest?cb=20131113025857');
  }
  function rightCharLost() {
    $leftImg.attr('src', 'https://m.popkey.co/d5de5c/Aopkv.gif');   $rightImg.attr('src', 'http://img3.wikia.nocookie.net/__cb20131216201832/vampirediaries/images/a/a6/Winning-Tom-Hiddleston.gif');
  }
  // =======================ACTIONS=====================
  disableRightButtons();
  $leftHPBar.css('width', `${$leftHPWidth}px`);
  $leftAttackBar.css('width', `${$leftAttackWidth}px`);
  $leftDefBar.css('width', `${$leftDefWidth}px`);
  $rightHPBar.css('width', `${$rightHPWidth}px`);
  $rightAttackBar.css('width', `${$rightAttackWidth}px`);
  $rightDefBar.css('width', `${$rightDefWidth}px`);

  // ====================LEFT BUTTONS=====================
  $leftAttackButton.on('click', () => {
    console.log('left attack');
    disableLeftButtons();
    $rightHPValue = $rightHPValue - ($leftAVValue - $rightDVValue);
    const remainingHP = $rightHPValue * 45;
    $rightHPBar.css('width', `${remainingHP}px`);
    if($rightHPValue <= 0){
      disableButtons();
      rightCharLost();
    }
  });
  $leftChargeButton.on('click', () => {
    console.log('left charge');
    disableLeftButtons();
    $leftAVValue = $leftAVValue * 2;
    if($leftAVValue > 10){
      $leftAVValue = 10;
      const doubleAttack = $leftAVValue * 45;
      $leftAttackBar.css('width', `${doubleAttack}px`);
    } else {
      const doubleAttack = $leftAVValue * 45;
      $leftAttackBar.css('width', `${doubleAttack}px`);
    }
  });
  $leftEscapeButton.on('click', () => {
    console.log('left escape');
    disableButtons();
    leftCharLost();
  });
  // ==================RIGHT BUTTONS====================
  $rightAttackButton.on('click', () => {
    console.log('right attack');
    disableRightButtons();
    $leftHPValue = $leftHPValue - ($rightAVValue - $leftDVValue);
    const remainingHP = $leftHPValue * 45;
    $leftHPBar.css('width', `${remainingHP}px`);
    if($leftHPValue <= 0){
      leftCharLost();
      disableButtons();
    }
  });
  $rightChargeButton.on('click', () => {
    console.log('right charge');
    disableRightButtons();
    $rightAVValue = $rightAVValue * 2;
    if($rightAVValue > 10){
      $rightAVValue = 10;
      const doubleAttack = $rightAVValue * 45;
      $rightAttackBar.css('width', `${doubleAttack}px`);
    } else {
      const doubleAttack = $rightAVValue * 45;
      $rightAttackBar.css('width', `${doubleAttack}px`);
    }
  });
  $rightEscapeButton.on('click', () => {
    console.log('right escape');
    disableButtons();
    rightCharLost();
  });

  $resetButton.on('click', resetAll);







});
