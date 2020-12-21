<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Форма регитрации</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container mt-4">
      <?php
        if($_COOKIE['user'] == ''):
      ?>
        <div class="row">
          <div class="col">
            <h1>Форма региcтрации</h1>
            <form action="validation-form/check.php" method="post">
                <input type="text" class="form-control" name="login"
                       id="login" placeholder="введите логин"><br>
                <input type="name" class="form-control" name="name"
                       id="name" placeholder="введите имя"><br>
                <input type="password" class="form-control" name="pass"
                       id="pass" placeholder="введите пароль"><br>
                <button class="btn btn-success" type="submit">Зарегиститровать</button>
            </form>
          </div>
          <div class="col">
            <h1>Форма авторизации</h1>
            <form action="validation-form/auth.php" method="post">
                <input type="text" class="form-control" name="login"
                       id="login" placeholder="введите логин"><br>
                <input type="password" class="form-control" name="pass"
                       id="pass" placeholder="введите пароль"><br>
                <button class="btn btn-success" type="submit">Авторизоваться</button>
            </form>
          </div>
        <?php else: ?>
          <p>Привет <?=$_COOKIE['user']?>. Вы успешно зашли к себе в аккаунт.
            Чтобы выйти нажмите <a href="/exit.php">здесь</a>. Чтобы вернуться
            к заказу Apple нажмите <a href="file:///Applications/MAMP/htdocs/Apple/index.html">здесь</a>.</p>
        <?php endif;?>
        </div>
    </div>
</body>
</html>
