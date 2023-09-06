const form = document.querySelector('form');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');

// 表单提交事件处理程序
form.addEventListener('submit', function (event) {
  event.preventDefault(); // 防止表单提交刷新页面

  // 获取输入的用户名和密码
  const username = usernameInput.value;
  const password = passwordInput.value;

  // 模拟验证过程
  if (username === 'admin' && password === 'admin') {
    alert('登录成功！');
    // 在这里可以跳转到其他页面或执行其他操作
  } else {
    alert('用户名或密码错误，请重试！');
  }
});


