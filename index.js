const quiz = [
    {
      question: 'ブラウザの画⾯サイズに応じてCSSのスタイルを設定できる⽅法は次のうちどれ',
      answers: [ 'セレクタ', 'DRY', 'Flexbox', 'メディアクエリ'],
      correct: 'メディアクエリ'
    }, {
      question: '10秒かけて全ての要素を動かす。ただし、始まりはゆっくり動かす」というアニメーションに必要な記述として最も適切なものは、次のうちどれ',
      answers: [ 'transition: p 10s linear;', 'transition: all 10s steps;', 'transform:  all 10s ease;', 'transition: all 10s ease-in;'],
      correct: 'transition: all 10s ease-in;'
    }, {
      question: '関数の役割の説明として最も適切なものは、次のうちどれ',
      answers: [ '数値や文字列などのデータを保持する', '入力されたデータを受け取り、出力を返す', 'メモリ内の値を上書きする', 'データを保つコンテナのように機能する'],
      correct: '入力されたデータを受け取り、出力を返す'
    }
  ];
  
  const $window = window;
  const $doc = document;
  const $question = $doc.getElementById('js-question');
  const $buttons = $doc.querySelectorAll('.btn');
  
  const quizLen = quiz.length;
  let quizCount = 0;
  let score = 0;
  
  const init = () => {
    $question.textContent = quiz[quizCount].question;
    
    const buttonLen = $buttons.length;
    let btnIndex = 0;
    
    while(btnIndex < buttonLen){
      $buttons[btnIndex].textContent = quiz[quizCount].answers[btnIndex];
      btnIndex++;
    }
  };
  
  const goToNext = () => {
    quizCount++;
    if(quizCount < quizLen){
      init(quizCount);
    } else {
      // $window.alert('クイズ終了！');
      showEnd();
    }
  };
  
  const judge = (elm) => {
    if(elm.textContent === quiz[quizCount].correct){
      $window.alert('正解!');
      score++;
    } else {
      $window.alert('不正解!');
    }
    goToNext();
  };
  
  const showEnd = () => {
    $question.textContent = '終了！あなたのスコアは' + score + '/' + quizLen + 'です';
    
    const $items = $doc.getElementById('js-items');
    $items.style.visibility = 'hidden';
  };
  
  init();
  
  let answersIndex = 0;
  let answersLen = quiz[quizCount].answers.length;
  
  while(answersIndex < answersLen){
    $buttons[answersIndex].addEventListener('click', (e) => {
      judge(e.target);
    });
    answersIndex++;
  }