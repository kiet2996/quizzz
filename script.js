 const questions = [

  {
    "question": " Nếu một cách làm không hiệu quả, tôi có thể nhanh chóng nghĩ ra cách khác.",
    "options": [
      { "text": "Tôi luôn chủ động nghĩ ra cách mới ngay lập tức.", "score": 5 },
      { "text": "Tôi thường có thể nghĩ ra cách khác khá nhanh.", "score": 4 },
      { "text": "Thỉnh thoảng tôi mới nghĩ ra được cách khác.", "score": 3 },
      { "text": "Tôi thường bị loay hoay, không biết phải thay đổi thế nào.", "score": 2 },
      { "text": "Tôi không thể nghĩ ra cách khác khi gặp thất bại.", "score": 1 }
    ]
  },
  {
    "question": " Tôi thường đoán trước được những rủi ro có thể xảy ra và tìm cách để tránh chúng.",
    "options": [
      { "text": "Tôi luôn lường trước rủi ro và lên phương án phòng tránh.", "score": 5 },
      { "text": "Tôi thường để ý đến rủi ro và có kế hoạch xử lý.", "score": 4 },
      { "text": "Thỉnh thoảng tôi để ý đến rủi ro.", "score": 3 },
      { "text": "Tôi hiếm khi đoán được rủi ro.", "score": 2 },
      { "text": "Tôi không nghĩ đến rủi ro cho đến khi nó xảy ra.", "score": 1 }
    ]
  },
  {
    "question": " Tôi tin rằng sai lầm là cơ hội để học hỏi và làm tốt hơn.",
    "options": [
      { "text": "Tôi luôn xem sai lầm là bài học quý giá.", "score": 5 },
      { "text": "Tôi thường cố gắng học từ sai lầm của mình.", "score": 4 },
      { "text": "Thỉnh thoảng tôi học được từ sai lầm.", "score": 3 },
      { "text": "Tôi cảm thấy khó chịu khi mắc sai.", "score": 2 },
      { "text": "Tôi rất sợ mắc sai lầm và thường không rút ra được điều gì.", "score": 1 }
    ]
  },
  {
    "question": " Tôi không ngại thử công nghệ hay phương pháp mới để hoàn thành công việc.",
    "options": [
      { "text": "Tôi rất hào hứng thử cái mới để làm việc hiệu quả hơn.", "score": 5 },
      { "text": "Tôi sẵn sàng thử cái mới nếu thấy phù hợp.", "score": 4 },
      { "text": "Thỉnh thoảng tôi mới thử cái mới.", "score": 3 },
      { "text": "Tôi thường tránh dùng cái gì mới, thấy không an tâm.", "score": 2 },
      { "text": "Tôi luôn từ chối công nghệ hay phương pháp mới.", "score": 1 }
    ]
  },
  {
    "question": " Tôi luôn lắng nghe khi người khác góp ý, kể cả khi đó là những lời chê.",
    "options": [
      { "text": "Tôi luôn mở lòng đón nhận góp ý, dù tích cực hay tiêu cực.", "score": 5 },
      { "text": "Tôi thường lắng nghe người khác nói và suy nghĩ về điều đó.", "score": 4 },
      { "text": "Thỉnh thoảng tôi tiếp nhận góp ý.", "score": 3 }, 
{ "text": "Tôi thường thấy khó chịu nếu bị góp ý.", "score": 2 },
      { "text": "Tôi không chấp nhận người khác chỉ trích hay nhận xét.", "score": 1 }
    ]
  },
  {
    "question": " Nếu có ai trong nhóm có ý tưởng hay hơn tôi, tôi sẵn sàng nghe theo.",
    "options": [
      { "text": "Tôi luôn sẵn sàng ủng hộ ý tưởng tốt hơn, không quan trọng của ai.", "score": 5 },
      { "text": "Tôi thường chọn theo ý tưởng hợp lý, kể cả không phải của mình.", "score": 4 },
      { "text": "Thỉnh thoảng tôi đồng ý làm theo người khác.", "score": 3 },
      { "text": "Tôi thường thích giữ quan điểm của mình hơn.", "score": 2 },
      { "text": "Tôi không muốn theo ý tưởng của người khác, dù có hay hơn.", "score": 1 }
    ]
  },
  {
    "question": " Khi mắc lỗi, tôi biết nhận trách nhiệm mà không đổ lỗi cho người khác hay hoàn cảnh.",
    "options": [
      { "text": "Tôi luôn thẳng thắn nhận lỗi và học hỏi từ đó.", "score": 5 },
      { "text": "Tôi thường chấp nhận lỗi lầm của mình.", "score": 4 },
      { "text": "Thỉnh thoảng tôi nhận lỗi, còn lại thường viện lý do.", "score": 3 },
      { "text": "Tôi hay đổ lỗi cho hoàn cảnh.", "score": 2 },
      { "text": "Tôi luôn tìm cách đổ lỗi cho người khác.", "score": 1 }
    ]
  },
  {
    "question": " Dù đôi lúc nghi ngờ bản thân, tôi vẫn cố gắng đối mặt với thử thách.",
    "options": [
      { "text": "Tôi luôn vượt qua sự nghi ngờ để tiếp tục cố gắng.", "score": 5 },
      { "text": "Tôi thường dũng cảm đối mặt với khó khăn.", "score": 4 },
      { "text": "Thỉnh thoảng tôi còn do dự và tránh né.", "score": 3 },
      { "text": "Tôi thường bỏ cuộc khi thấy không chắc chắn.", "score": 2 },
      { "text": "Tôi không thể đối diện với thử thách khi không tự tin.", "score": 1 }
    ]
  },
  {
    "question": " Tôi luôn cố gắng đóng góp để công việc chung tốt hơn.",
    "options": [
      { "text": "Tôi chủ động hỗ trợ và góp phần vào kết quả chung.", "score": 5 },
      { "text": "Tôi thường cố gắng làm tròn trách nhiệm và giúp đỡ nhóm.", "score": 4 },
      { "text": "Thỉnh thoảng tôi mới hỗ trợ đồng đội.", "score": 3 },
      { "text": "Tôi ít khi quan tâm đến công việc chung.", "score": 2 },
      { "text": "Tôi chỉ làm phần của mình, không để ý đến nhóm.", "score": 1 }
    ]
  },
  {
    "question": " Tôi hiểu công việc mình đang làm đang góp phần vào mục tiêu chung như thế nào.",
    "options": [
      { "text": "Tôi luôn rõ ràng về vai trò và tác động công việc của mình.", "score": 5 },
{ "text": "Tôi thường hiểu được mình đang góp gì cho tập thể.", "score": 4 },
      { "text": "Thỉnh thoảng tôi suy nghĩ về điều này.", "score": 3 },
      { "text": "Tôi thường làm mà không hiểu rõ ý nghĩa chung.", "score": 2 },
      { "text": "Tôi không quan tâm công việc mình ảnh hưởng gì đến nhóm.", "score": 1 }
    ]
  },
  {
    "question": " Tôi thích nghĩ ra nhiều cách giải quyết cho một vấn đề và thử xem cách nào hiệu quả nhất.",
    "options": [
      { "text": "Tôi luôn linh hoạt tìm nhiều giải pháp rồi chọn cách tối ưu.", "score": 5 },
      { "text": "Tôi thường đưa ra vài hướng để so sánh.", "score": 4 },
      { "text": "Thỉnh thoảng tôi tìm được cách khác.", "score": 3 },
      { "text": "Tôi thường làm theo quán tính, không nghĩ thêm.", "score": 2 },
      { "text": "Tôi không có thói quen tìm giải pháp thay thế.", "score": 1 }
    ]
  },
  {
    "question": " Tôi thường suy nghĩ kỹ trước khi phản ứng với điều gì đó.",
    "options": [
      { "text": "Tôi luôn bình tĩnh và cân nhắc trước khi phản ứng.", "score": 5 },
      { "text": "Tôi thường suy nghĩ trước khi nói hay hành động.", "score": 4 },
      { "text": "Thỉnh thoảng tôi kiểm soát được phản ứng.", "score": 3 },
      { "text": "Tôi dễ bốc đồng, phản ứng thiếu kiểm soát.", "score": 2 },
      { "text": "Tôi phản ứng theo cảm xúc, không suy nghĩ gì cả.", "score": 1 }
    ]
  },
  {
    "question": " Khi có thay đổi, tôi có thể điều chỉnh kế hoạch cho phù hợp.",
    "options": [
      { "text": "Tôi luôn sẵn sàng điều chỉnh kế hoạch linh hoạt.", "score": 5 },
      { "text": "Tôi thường cố gắng thích ứng với thay đổi.", "score": 4 },
      { "text": "Thỉnh thoảng tôi thay đổi được, còn lại thì cố giữ kế hoạch cũ.", "score": 3 },
      { "text": "Tôi thấy rất khó điều chỉnh kế hoạch.", "score": 2 },
      { "text": "Tôi không thể thay đổi gì khi gặp tình huống mới.", "score": 1 }
    ]
  },
  {
    "question": " Tôi có thể giữ bình tĩnh khi gặp tình huống căng thẳng.",
    "options": [
      { "text": "Tôi luôn giữ được sự bình tĩnh để giải quyết vấn đề.", "score": 5 },
      { "text": "Tôi thường cố gắng giữ bình tĩnh khi áp lực.", "score": 4 },
      { "text": "Thỉnh thoảng tôi giữ được bình tĩnh.", "score": 3 },
      { "text": "Tôi dễ bị cuống khi gặp căng thẳng.", "score": 2 },
      { "text": "Tôi thường hoảng loạn và mất kiểm soát.", "score": 1 }
    ]
  }
];


    let current = 0;
    let totalScore = 0;
    let timer;
    let timeLeft = 20;
    let shuffled = [];

    function shuffle(array) {
      return array.sort(() => Math.random() - 0.5);
    }

    function showQuestion() {
      if (current >= shuffled.length) {
        showResult();
        return;
      }

      const q = shuffled[current];
      document.getElementById("question-box").textContent = `Câu ${current + 1}: ${q.question}`;
      const optBox = document.getElementById("options");
      optBox.innerHTML = "";

      shuffle(q.options).forEach(opt => {
        const btn = document.createElement("button");
        btn.textContent = opt.text;
        btn.onclick = () => {
          totalScore += opt.score;
          nextQuestion();
        };
        optBox.appendChild(btn);
      });

      startTimer();
    }

    function startTimer() {
      timeLeft = 40;
      document.getElementById("countdown").textContent = timeLeft;
      timer = setInterval(() => {
        timeLeft--;
        document.getElementById("countdown").textContent = timeLeft;
        if (timeLeft <= 0) {
          clearInterval(timer);
          nextQuestion();
        }
      }, 1000);
    }

    function nextQuestion() {
      clearInterval(timer);
      current++;
      showQuestion();
    }

    function showResult() {
      document.getElementById("quiz-section").style.display = "none";
      document.getElementById("result-box").style.display = "block";
      document.getElementById("score").textContent = `Bạn được ${totalScore} điểm.`;
    }

    document.getElementById("next-btn").addEventListener("click", () => {
      clearInterval(timer);
      nextQuestion();
    });

    document.getElementById("info-form").addEventListener("submit", function(e) {
      e.preventDefault();
      const name = document.getElementById("name").value;
      const className = document.getElementById("class").value;
      const id = document.getElementById("id").value;

      document.getElementById("user-info").textContent =
        `Thí sinh: ${name} - Lớp: ${className} - Mã: ${id}`;

      // Ẩn phần nhập, hiện phần bài thi
      document.getElementById("info-section").style.display = "none";
      document.getElementById("quiz-section").style.display = "block";

      shuffled = shuffle([...questions]);
      showQuestion();
    });
