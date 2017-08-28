$(() => {
  // ==================VARIABLES========================
  const $leftPhoto = $('.leftPhoto');
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
  const $rightPhoto = $('.rightPhoto');
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
      $rightHPBar.css('width', '450px');
      $rightHPBar.css('background-color', 'black');
      $rightHPBar.css('border', 'none');
      $rightPhoto.css('background', 'url(\'../src/images/you-lose.jpg\')');
      disableButtons();
      rightCharLost();
    }
  });
  function rightCharLost() {
    $rightHPBar.css('width', '450px');
    $rightHPBar.css('background-color', 'black');
    $rightHPBar.css('border', 'none');
  }

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
    $leftPhoto.css('background-image', 'url(\'../src/images/you-lose.jpg\')');
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
  function leftCharLost() {
    $leftHPBar.css('width', '450px');
    $leftHPBar.css('background-color', 'black');
    $leftHPBar.css('border', 'none');
  }
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
    $leftPhoto.css('background-image', 'url(\'../src/images/you-lose.jpg\')');
  });
  function resetAll() {
    $leftHPBar.css('background-color', 'green');
    $leftHPBar.css('border', '5px solid white');
    $rightHPBar.css('background-color', 'green');
    $rightHPBar.css('border', '5px solid white');
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

  }
  $resetButton.on('click', resetAll);







});
