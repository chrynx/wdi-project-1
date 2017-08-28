$(() => {
  // ==================VARIABLES========================
  const $body = $('body');
  const $header = $('header');
  const $h1 = $('h1');
  const $main = $('main');
  const $game = $('.game');
  const $topSpacer = $('.topSpacer');
  const $leftPlayerName = $('.leftPlayerName');
  const $topSpacerMiddleFiller = $('.topSpacerMiddleFiller');
  const $rightPlayerName = $('.rightPlayerName');
  const $centerArea = $('.centerArea');
  const $leftFiller = $('.leftFiller');
  const $leftCharacter = $('.leftCharacter');
  const $leftPhoto = $('.leftPhoto');
  const $leftName = $('.leftName');
  const $leftStats = $('.leftStats');
  const $leftHP = $('.leftHP');
  const $leftHPValue = $('.leftHPValue');
  const $leftAV = $('.leftAV');
  const $leftAVValue = $('.leftAVValue');
  const $leftDV = $('.leftDV');
  const $leftDVValue = $('.leftDVValue');
  const $leftButtons = $('.leftButtons');
  const $leftAttackButton = $('.leftAttackButton');
  const $leftChargeButton = $('.leftChargeButton');
  const $leftEscapeButton = $('.leftEscapeButton');
  const $middleArea = $('.middleArea');
  const $leftHPCalculate = $('.leftHPCalculate');
  let $leftHPBar = $('.leftHPBar');
  let $leftAttackBar = $('.leftAttackBar');
  let $leftDefBar = $('.leftDefBar');
  const $middleFiller = $('.middleFiller');
  let $rightHPBar = $('.rightHPBar');
  let $rightAttackBar = $('.rightAttackBar');
  let $rightDefBar = $('.rightDefBar');
  const $rightCharacter = $('.rightCharacter');
  const $rightPhoto = $('.rightPhoto');
  const $rightName = $('.rightName');
  const $rightStats = $('.rightStats');
  const $rightHP = $('.rightHP');
  const $rightHPValue = $('.rightHPValue');
  const $rightAV = $('.rightAV');
  const $rightAVValue = $('.rightAVValue');
  const $rightDV = $('.rightDV');
  const $rightDVValue = $('.rightDVValue');
  const $rightButtons = $('.rightButtons');
  const $rightAttackButton = $('.rightAttackButton');
  const $rightChargeButton = $('.rightChargeButton');
  const $rightEscapeButton = $('.rightEscapeButton');
  const $rightFiller = $('.rightFiller');
  const $bottomSpacer = $('.bottomSpacer');
  const $bottomSpacerLeft = $('.bottomSpacerLeft');
  const $bottomSpacerLeftChar = $('.bottomSpacerLeftChar');
  const $bottomSpacerMiddle = $('.bottomSpacerMiddle');
  const $bottomSpacerRightChar = $('.bottomSpacerRightChar');
  const $bottomSpacerRight = $('.bottomSpacerRight');
  const $footer = $('.footer');
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
  // =======================ACTIONS=====================
  disableRightButtons();

  // ====================LEFT BUTTONS=====================
  $leftAttackButton.on('click', () => {
    console.log('left attack');
    disableLeftButtons();
  });

  $leftChargeButton.on('click', () => {
    console.log('left charge');
    disableLeftButtons();
  });

  $leftEscapeButton.on('click', () => {
    console.log('left escape');
    disableLeftButtons();
  });

  // ==================RIGHT BUTTONS====================
  $rightAttackButton.on('click', () => {
    console.log('right attack');
    disableRightButtons();
  });

  $rightChargeButton.on('click', () => {
    console.log('right charge');
    disableRightButtons();
  });

  $rightEscapeButton.on('click', () => {
    console.log('right escape');
    disableRightButtons();
  });













});
