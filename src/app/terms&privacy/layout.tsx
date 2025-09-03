import { Box, Typography } from "@mui/material";
import Footer from "../components/Footer";
import { PropsWithChildren } from "react";

export default function TermsAndPrivacyLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#09021C",
          marginTop: "clamp(20px, 19vw, 113px)",
          color: "#fff",
        }}
      >
        {children}
        <Box
          sx={{
            margin: "auto",
            width: "clamp(320px, 60vw, 1200px)",
            fontFamily: "Manrope",
          }}
        >
          <Typography
            id="privacy-policy"
            sx={{
              fontSize: "clamp(0px, 7vw, 30px)",
              fontWeight: "800",
              fontFamily: "Manrope",
              scrollMarginTop: "clamp(20px, 19vw, 113px)",
              marginTop: "clamp(10px, 20vw, 70px)",
            }}
          >
            Політика конфіденційності
          </Typography>
          <ol
            className="privacyLi"
            style={{
              listStyle: "none",
              color: "#B2B2B2",
              fontFamily: "Inter",
              fontWeight: "400",
              marginTop: "clamp(0px, 5vw, 20px)",
            }}
          >
            <li>
              <Typography marginRight="20px">1.1</Typography>
              <Typography
                component="span"
                sx={{ fontSize: "clamp(1px, 3vw, 18px)" }}
              >
                Власник веб-сайту{" "}
                <span style={{ color: "white", fontWeight: "600" }}>
                  Mineclub.com.ua
                </span>
                , у відповідності до Закону України "Про захист персональних
                даних" та Загального регламенту про захист даних (GDPR),
                встановлює наступні умови обробки персональних даних:
              </Typography>
            </li>
            <li>
              <Typography marginRight="20px">1.2</Typography>
              <Typography
                component="span"
                sx={{
                  fontSize: "clamp(1px, 3vw, 20px)",
                  color: "white",
                  fontWeight: "600",
                }}
              >
                Категорії персональних даних, що обробляються:
                <ul
                  style={{
                    color: "#B2B2B2",
                    fontFamily: "Inter",
                    fontWeight: "400",
                    marginTop: "clamp(0px, 5vw, 20px)",
                    listStyleType: "disc",
                  }}
                >
                  <li>Ідентифікаційні дані (логін, нікнейм)</li>
                  <li>Контактні дані (електронна адреса)</li>
                  <li>Технічні дані (IP-адреса, тип браузера, дані cookies)</li>
                  <li>Фінансові дані (історія транзакцій)</li>
                </ul>
              </Typography>
            </li>
            <li>
              <Typography marginRight="20px">1.3</Typography>
              <Typography
                component="span"
                sx={{
                  fontSize: "clamp(1px, 3vw, 20px)",
                  color: "white",
                  fontWeight: "600",
                }}
              >
                Підстави та цілі обробки:
                <Typography
                  sx={{
                    color: "#B2B2B2",
                    marginTop: "clamp(0px, 2vw, 20px)",
                    fontSize: "clamp(1px, 3vw, 20px)",
                  }}
                >
                  Обробка здійснюється на підставі:
                </Typography>
                <ul
                  style={{
                    color: "#B2B2B2",
                    fontFamily: "Inter",
                    fontWeight: "400",
                    marginTop: "clamp(0px, 5vw, 20px)",
                    listStyleType: "disc",
                  }}
                >
                  <li>
                    Вашої згоди (ст. 11 ЗУ "Про захист персональних даних")
                  </li>
                  <li>
                    Необхідності виконання договору (п. 2 ст. 6 GDPR) Основними
                    цілями обробки є:
                    <ul
                      style={{
                        color: "#B2B2B2",
                        fontFamily: "Inter",
                        fontWeight: "400",
                        marginTop: "clamp(0px, 5vw, 20px)",
                        listStyleType: "disc",
                      }}
                    >
                      <li>Надання доступу до ігрових сервісів</li>
                      <li>Виконання зобов'язань за договорами</li>
                      <li>Забезпечення безпеки сервісів</li>
                    </ul>
                  </li>
                </ul>
              </Typography>
            </li>
            <li>
              <Typography marginRight="20px">1.4</Typography>
              <Typography
                component="span"
                sx={{
                  fontSize: "clamp(1px, 3vw, 20px)",
                  color: "white",
                  fontWeight: "600",
                }}
              >
                Строки зберігання:
                <Typography
                  sx={{
                    color: "#B2B2B2",
                    marginTop: "clamp(0px, 2vw, 20px)",
                    fontSize: "clamp(1px, 3vw, 20px)",
                  }}
                >
                  Персональні дані зберігаються:
                </Typography>
                <ul
                  style={{
                    color: "#B2B2B2",
                    fontFamily: "Inter",
                    fontWeight: "400",
                    marginTop: "clamp(0px, 5vw, 20px)",
                    listStyleType: "disc",
                  }}
                >
                  <li>Протягом дії договірних відносин</li>
                  <li>
                    3 роки після останньої активності (у відповідності до
                    податкового законодавства)
                  </li>
                  <li>До відкликання згоди суб'єкта даних</li>
                </ul>
              </Typography>
            </li>
            <li>
              <Typography marginRight="20px">1.5</Typography>
              <Typography
                component="span"
                sx={{
                  fontSize: "clamp(1px, 3vw, 20px)",
                  color: "white",
                  fontWeight: "600",
                }}
              >
                Права суб'єкта даних:
                <Typography
                  sx={{
                    color: "#B2B2B2",
                    marginTop: "clamp(0px, 2vw, 20px)",
                    fontSize: "clamp(1px, 3vw, 20px)",
                  }}
                >
                  Ви маєте право:
                </Typography>
                <ul
                  style={{
                    color: "#B2B2B2",
                    fontFamily: "Inter",
                    fontWeight: "400",
                    marginTop: "clamp(0px, 5vw, 20px)",
                    listStyleType: "disc",
                  }}
                >
                  <li>На доступ до своїх даних</li>
                  <li>На виправлення неточностей</li>
                  <li>На забуття (видалення даних)</li>
                  <li>На обмеження обробки</li>
                  <li>На перенесення даних</li>
                  <li>На відкликання згоди</li>
                </ul>
              </Typography>
            </li>
            <li>
              <Typography marginRight="20px">1.6</Typography>
              <Typography
                component="span"
                sx={{
                  fontSize: "clamp(1px, 3vw, 20px)",
                  color: "white",
                  fontWeight: "600",
                }}
              >
                Заходи захисту:
                <Typography
                  sx={{
                    color: "#B2B2B2",
                    marginTop: "clamp(0px, 2vw, 20px)",
                    fontSize: "clamp(1px, 3vw, 20px)",
                  }}
                >
                  Оператор вживає організаційних та технічних заходів:
                </Typography>
                <ul
                  style={{
                    color: "#B2B2B2",
                    fontFamily: "Inter",
                    fontWeight: "400",
                    marginTop: "clamp(0px, 5vw, 20px)",
                    listStyleType: "disc",
                  }}
                >
                  <li>Шифрування даних (TLS 1.2+)</li>
                  <li>Контроль доступу</li>
                  <li>Регулярні аудити безпеки</li>
                  <li>Псевдонімізація даних</li>
                </ul>
              </Typography>
            </li>
            <li>
              <Typography marginRight="20px">1.7</Typography>
              <Typography
                component="span"
                sx={{
                  fontSize: "clamp(1px, 3vw, 20px)",
                  color: "white",
                  fontWeight: "600",
                }}
              >
                Треті особи:{" "}
                <Typography
                  sx={{
                    color: "#B2B2B2",
                    marginTop: "clamp(0px, 2vw, 20px)",
                    fontSize: "clamp(1px, 3vw, 20px)",
                  }}
                >
                  Дані можуть передаватись:
                </Typography>
                <ul
                  style={{
                    color: "#B2B2B2",
                    fontFamily: "Inter",
                    fontWeight: "400",
                    marginTop: "clamp(0px, 5vw, 20px)",
                    listStyleType: "disc",
                  }}
                >
                  <li>Платіжним системам (для обробки транзакцій)</li>
                  <li>Хостинг-провайдерам (для технічного обслуговування)</li>
                  <li>Правоохоронним органам (за законним запитом)</li>
                </ul>
              </Typography>
            </li>
            <li>
              <Typography marginRight="20px">1.8</Typography>
              <Typography
                component="span"
                sx={{
                  fontSize: "clamp(1px, 3vw, 20px)",
                  color: "white",
                  fontWeight: "600",
                }}
              >
                Міжнародна передача:
                <Typography
                  sx={{
                    color: "#B2B2B2",
                    marginTop: "clamp(0px, 2vw, 20px)",
                    fontSize: "clamp(1px, 3vw, 20px)",
                  }}
                >
                  Дані можуть передаватись до країн, що забезпечують адекватний
                  рівень захисту згідно з рішенням ЄС.
                </Typography>
              </Typography>
            </li>
            <li>
              <Typography marginRight="20px">1.9</Typography>
              <Typography
                component="span"
                sx={{
                  fontSize: "clamp(1px, 3vw, 20px)",
                  color: "white",
                  fontWeight: "600",
                }}
              >
                Автоматизоване прийняття рішень:
                <Typography
                  sx={{
                    color: "#B2B2B2",
                    marginTop: "clamp(0px, 2vw, 20px)",
                    fontSize: "clamp(1px, 3vw, 20px)",
                  }}
                >
                  Система не використовує профілювання для автоматичних рішень,
                  що мають юридичні наслідки.
                </Typography>
              </Typography>
            </li>
            <li>
              <Typography marginRight="20px">2.0</Typography>
              <Typography
                component="span"
                sx={{
                  fontSize: "clamp(1px, 3vw, 20px)",
                  color: "white",
                  fontWeight: "600",
                }}
              >
                Контактна інформація:
                <Typography
                  sx={{
                    color: "#B2B2B2",
                    marginTop: "clamp(0px, 2vw, 20px)",
                    fontSize: "clamp(1px, 3vw, 20px)",
                  }}
                >
                  Для реалізації прав або скарг звертайтесь до
                  afs851826@gmail.com.
                </Typography>
              </Typography>
            </li>
            <li>
              <Typography marginRight="20px">2.1</Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  component="span"
                  sx={{
                    fontSize: "clamp(1px, 3vw, 20px)",
                    color: "white",
                    fontWeight: "600",
                  }}
                >
                  Зміни до Політики:
                  <Typography
                    sx={{
                      color: "#B2B2B2",
                      marginTop: "clamp(0px, 2vw, 20px)",
                      fontSize: "clamp(1px, 3vw, 20px)",
                    }}
                  >
                    Оператор залишає право вносити зміни з попереднім
                    оприлюдненням за 30 днів до набрання чинності. Дата набрання
                    чинності: [число] [місяць] [рік]
                  </Typography>
                </Typography>
                <Typography
                  component="span"
                  sx={{
                    fontSize: "clamp(1px, 3vw, 20px)",
                    color: "white",
                    fontWeight: "600",
                    marginTop: "clamp(0px, 5vw, 20px)",
                  }}
                >
                  Примітка:
                  <Typography
                    sx={{
                      color: "#B2B2B2",
                      marginTop: "clamp(0px, 2vw, 20px)",
                      fontSize: "clamp(1px, 3vw, 20px)",
                    }}
                  >
                    Використання сервісів після набрання чинності цієї Політики
                    означає безумовне прийняття всіх її умов.
                  </Typography>
                </Typography>
              </Box>
            </li>
          </ol>
          <Typography
            id="user-agreement"
            sx={{
              fontSize: "clamp(0px, 7vw, 30px)",
              fontWeight: "800",
              fontFamily: "Manrope",
              marginTop: "clamp(10px, 20vw, 70px)",
              scrollMarginTop: "clamp(20px, 19vw, 113px)",
            }}
          >
            Угода користувача
          </Typography>
          <ol
            className="privacyLi"
            style={{
              listStyle: "none",
              color: "#B2B2B2",
              fontFamily: "Inter",
              fontWeight: "400",
              marginTop: "clamp(0px, 5vw, 20px)",
            }}
          >
            <li>
              <Typography color="white" marginRight="20px">
                1.1
              </Typography>
              <Typography
                component="span"
                sx={{
                  fontSize: "clamp(1px, 3vw, 20px)",
                  color: "white",
                  fontWeight: "600",
                }}
              >
                Загальні умови
                <Typography
                  sx={{
                    color: "#B2B2B2",
                    marginTop: "clamp(0px, 2vw, 20px)",
                    fontSize: "clamp(1px, 3vw, 20px)",
                  }}
                >
                  Ця Угода регулює відносини між власником сервера «
                  <span
                    style={{
                      fontFamily: "Inter",
                      fontWeight: "800",
                      background:
                        "radial-gradient(circle at 100%, #F2C6DE 0%, #C88ED9 30%, #9863E7 60%, #C88ED9 80%, #F2C6DE 100%)",
                      backgroundSize: "200% auto",
                      backgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      animation: "animatedTextGradient 7s linear infinite 2s",
                    }}
                  >
                    MineClub
                  </span>
                  »(«Адміністрація») та користувачем веб-сайту «
                  <span
                    style={{
                      color: "white",
                      fontFamily: "Inter",
                    }}
                  >
                    mineclub.com.ua
                  </span>
                  »
                </Typography>
              </Typography>
            </li>
            <li>
              <Typography marginRight="20px">1.2</Typography>
              <Typography
                component="span"
                sx={{ fontSize: "clamp(1px, 3vw, 20px)" }}
              >
                Користувачем вважається будь-яка особа, яка здійснює реєстрацію,
                вхід або покупки через сайт.
              </Typography>
            </li>
            <li>
              <Typography marginRight="20px">1.3</Typography>
              <Typography
                component="span"
                sx={{ fontSize: "clamp(1px, 3vw, 20px)" }}
              >
                Використовуючи сайт, Користувач автоматично погоджується з
                умовами цієї Угоди.
              </Typography>
            </li>
            <li>
              <Typography color="white" marginRight="20px">
                2.1
              </Typography>
              <Typography
                component="span"
                sx={{
                  fontSize: "clamp(1px, 3vw, 20px)",
                  color: "white",
                  fontWeight: "600",
                }}
              >
                Реєстрація та обліковий запис
              </Typography>
            </li>
            <li>
              <Typography marginRight="20px">2.2</Typography>
              <Typography
                component="span"
                sx={{ fontSize: "clamp(1px, 3vw, 20px)" }}
              >
                Для доступу до деяких функцій (наприклад, магазину) необхідна
                реєстрація.
              </Typography>
            </li>
            <li>
              <Typography marginRight="20px">2.3</Typography>
              <Typography
                component="span"
                sx={{ fontSize: "clamp(1px, 3vw, 20px)" }}
              >
                Користувач зобов’язується надавати достовірні дані та не
                передавати свій акаунт третім особам.
              </Typography>
            </li>
            <li>
              <Typography marginRight="20px">2.4</Typography>
              <Typography
                component="span"
                sx={{ fontSize: "clamp(1px, 3vw, 20px)" }}
              >
                Адміністрація має право заблокувати акаунт за порушення правил
                (чит, скам, образливу поведінку).
              </Typography>
            </li>
            <li>
              <Typography color="white" marginRight="20px">
                3.1
              </Typography>
              <Typography
                component="span"
                sx={{
                  fontSize: "clamp(1px, 3vw, 20px)",
                  color: "white",
                  fontWeight: "600",
                }}
              >
                Магазин та віртуальні товари
              </Typography>
            </li>
            <li>
              <Typography marginRight="20px">3.2</Typography>
              <Typography
                component="span"
                sx={{ fontSize: "clamp(1px, 3vw, 20px)" }}
              >
                У магазині продаються віртуальні предмети (валюта, привілеї),
                які можна використовувати лише на сервері.
              </Typography>
            </li>
            <li>
              <Typography marginRight="20px">3.3</Typography>
              <Typography
                component="span"
                sx={{ fontSize: "clamp(1px, 3vw, 20px)" }}
              >
                Ці предмети не є власністю Користувача у реальному житті та не
                підлягають обміну на реальні гроші.
              </Typography>
            </li>
            <li>
              <Typography marginRight="20px">3.4</Typography>
              <Typography
                component="span"
                sx={{ fontSize: "clamp(1px, 3vw, 20px)" }}
              >
                Адміністрація не відшкодовує втрачені віртуальні предмети через
                випадковість ігрового процесу (смерть, рейди тощо).
              </Typography>
            </li>
            <li>
              <Typography color="white" marginRight="20px">
                4.1
              </Typography>
              <Typography
                component="span"
                sx={{
                  fontSize: "clamp(1px, 3vw, 20px)",
                  color: "white",
                  fontWeight: "600",
                }}
              >
                Обмеження відповідальності{" "}
              </Typography>
            </li>
            <li>
              <Typography marginRight="20px">4.2</Typography>
              <Typography
                component="span"
                sx={{
                  fontSize: "clamp(1px, 3vw, 20px)",
                }}
              >
                Адміністрація{" "}
                <span
                  style={{
                    color: "white",
                    fontWeight: "600",
                  }}
                >
                  не несе відповідальності за:
                </span>
                <ul
                  style={{
                    color: "#B2B2B2",
                    fontFamily: "Inter",
                    fontWeight: "400",
                    marginTop: "clamp(0px, 5vw, 20px)",
                    listStyleType: "disc",
                  }}
                >
                  <li>DDoS-атаки або втрату даних.</li>
                  <li>Дії третіх осіб (крадіжку акаунта, шахрайство).</li>
                  <li>Втрату віртуальних предметів через ігрові події.</li>
                </ul>
              </Typography>
            </li>
            <li>
              <Typography marginRight="20px">4.3</Typography>
              <Typography
                component="span"
                sx={{
                  fontSize: "clamp(1px, 3vw, 20px)",
                }}
              >
                У разі зникнення предметів через технічний збій,{" "}
                <span
                  style={{
                    color: "white",
                    fontWeight: "600",
                  }}
                >
                  Адміністрація відновлює їх за запитом.
                </span>
              </Typography>
            </li>
            <li>
              <Typography color="white" marginRight="20px">
                5.1
              </Typography>
              <Typography
                component="span"
                sx={{
                  fontSize: "clamp(1px, 3vw, 20px)",
                  color: "white",
                  fontWeight: "600",
                }}
              >
                Зміни та припинення дії{" "}
              </Typography>
            </li>
            <li>
              <Typography marginRight="20px">5.2</Typography>
              <Typography
                component="span"
                sx={{ fontSize: "clamp(1px, 3vw, 20px)" }}
              >
                Адміністрація може змінювати умови без попередження.
              </Typography>
            </li>
            <li>
              <Typography marginRight="20px">5.3</Typography>
              <Typography
                component="span"
                sx={{ fontSize: "clamp(1px, 3vw, 20px)" }}
              >
                Користувач може{" "}
                <span
                  style={{
                    color: "white",
                    fontWeight: "600",
                  }}
                >
                  видалити акаунт, але куплені предмети не компенсуються.
                </span>
              </Typography>
            </li>
          </ol>
          <Typography
            id="payment-terms"
            sx={{
              fontSize: "clamp(0px, 7vw, 30px)",
              fontWeight: "800",
              fontFamily: "Manrope",
              marginTop: "clamp(10px, 20vw, 70px)",
              scrollMarginTop: "clamp(20px, 19vw, 113px)",
            }}
          >
            Умови оплати
          </Typography>
          <ol
            className="privacyLi"
            style={{
              listStyle: "none",
              color: "#B2B2B2",
              fontFamily: "Inter",
              fontWeight: "400",
              marginTop: "clamp(0px, 5vw, 20px)",
            }}
          >
            <li>
              <Typography color="white" marginRight="20px">
                1.1
              </Typography>
              <Typography
                component="span"
                sx={{
                  fontSize: "clamp(1px, 3vw, 20px)",
                  color: "white",
                  fontWeight: "600",
                }}
              >
                Доступні способи{" "}
                <ul
                  style={{
                    color: "#B2B2B2",
                    fontFamily: "Inter",
                    fontWeight: "400",
                    marginTop: "clamp(0px, 5vw, 20px)",
                    listStyleType: "disc",
                  }}
                >
                  <li>
                    💳{" "}
                    <span
                      style={{
                        color: "white",
                        fontWeight: "600",
                      }}
                    >
                      Банківські карти
                    </span>{" "}
                    (Visa/Mastercard).
                  </li>
                  <li>
                    📱{" "}
                    <span
                      style={{
                        color: "white",
                        fontWeight: "600",
                      }}
                    >
                      Електронні гаманці
                    </span>{" "}
                    (PayPal, LiqPay, Cryptocurrency).
                  </li>
                  <li>
                    📱{" "}
                    <span
                      style={{
                        color: "white",
                        fontWeight: "600",
                      }}
                    >
                      Мобільні платежі
                    </span>{" "}
                    (якщо підключено).
                  </li>
                </ul>
              </Typography>
            </li>
            <li>
              <Typography color="white" marginRight="20px">
                1.2
              </Typography>
              <Typography
                component="span"
                sx={{
                  fontSize: "clamp(1px, 3vw, 20px)",
                  color: "white",
                  fontWeight: "600",
                }}
              >
                Важливі умови{" "}
              </Typography>
            </li>
            <li>
              <Typography marginRight="20px">1.3</Typography>
              <Typography
                component="span"
                sx={{ fontSize: "clamp(1px, 3vw, 20px)" }}
              >
                Всі платежі{" "}
                <span
                  style={{
                    color: "white",
                    fontWeight: "600",
                  }}
                >
                  фіксуються автоматично
                </span>
                . Якщо гроші списалися, а товар не прийшов –{" "}
                <span
                  style={{
                    color: "white",
                    fontWeight: "600",
                  }}
                >
                  звертайтеся в підтримку
                </span>
                .
              </Typography>
            </li>
            <li>
              <Typography marginRight="20px">1.4</Typography>
              <Typography
                component="span"
                sx={{ fontSize: "clamp(1px, 3vw, 20px)" }}
              >
                Ціни вказані в{" "}
                <span
                  style={{
                    color: "white",
                    fontWeight: "600",
                  }}
                >
                  гривнях{" "}
                </span>
                (UAH), але можлива конвертація за курсом банку.
              </Typography>
            </li>
            <li>
              <Typography marginRight="20px">1.5</Typography>
              <Typography
                component="span"
                sx={{ fontSize: "clamp(1px, 3vw, 20px)" }}
              >
                <span
                  style={{
                    color: "white",
                    fontWeight: "600",
                  }}
                >
                  Адміністрація не зберігає
                </span>{" "}
                дані карт – оплата йде через{" "}
                <span
                  style={{
                    color: "white",
                    fontWeight: "600",
                  }}
                >
                  захищені платіжні системи
                </span>
                .
              </Typography>
            </li>
            <li>
              <Typography color="white" marginRight="20px">
                1.6
              </Typography>
              <Typography
                component="span"
                sx={{
                  fontSize: "clamp(1px, 3vw, 20px)",
                  color: "white",
                  fontWeight: "600",
                }}
              >
                Проблеми з оплатою?{" "}
              </Typography>
            </li>
            <li>
              <Typography marginRight="20px">1.7</Typography>
              <Typography
                component="span"
                sx={{
                  fontSize: "clamp(1px, 3vw, 20px)",
                }}
              >
                Якщо оплата пройшла, а товар не надійшов:
                <ul
                  style={{
                    color: "#B2B2B2",
                    fontFamily: "Inter",
                    fontWeight: "400",
                    marginTop: "clamp(0px, 5vw, 20px)",
                    listStyleType: "disc",
                  }}
                >
                  <li>
                    Перевірте{" "}
                    <span
                      style={{
                        color: "white",
                        fontWeight: "600",
                      }}
                    >
                      ігровий інвентар
                    </span>{" "}
                    /{" "}
                    <span
                      style={{
                        color: "white",
                        fontWeight: "600",
                      }}
                    >
                      особистий кабінет
                    </span>
                    .
                  </li>
                  <li>
                    Якщо предметів немає –{" "}
                    <span
                      style={{
                        color: "white",
                        fontWeight: "600",
                      }}
                    >
                      напишіть в підтримку
                    </span>{" "}
                    з номером транзакції.
                  </li>
                </ul>
              </Typography>
            </li>
            <li>
              <Typography marginRight="20px">1.8</Typography>
              <Typography
                component="span"
                sx={{ fontSize: "clamp(1px, 3vw, 20px)" }}
              >
                У разі{" "}
                <span
                  style={{
                    color: "white",
                    fontWeight: "600",
                  }}
                >
                  відмови банку
                </span>{" "}
                – зверніться до вашої фінансової установи.
              </Typography>
            </li>
          </ol>
          <Typography
            id="refund-policy"
            sx={{
              fontSize: "clamp(0px, 7vw, 30px)",
              fontWeight: "800",
              fontFamily: "Manrope",
              marginTop: "clamp(10px, 20vw, 70px)",
              scrollMarginTop: "clamp(20px, 19vw, 113px)",
            }}
          >
            Політика повернення коштів
          </Typography>
          <ol
            className="privacyLi"
            style={{
              listStyle: "none",
              color: "#B2B2B2",
              fontFamily: "Inter",
              fontWeight: "400",
              marginTop: "clamp(0px, 5vw, 20px)",
            }}
          >
            <li>
              <Typography color="white" marginRight="20px">
                1.1
              </Typography>
              <Typography
                component="span"
                sx={{
                  fontSize: "clamp(1px, 3vw, 20px)",
                  color: "white",
                  fontWeight: "600",
                }}
              >
                Умови повернення
              </Typography>
            </li>
            <li>
              <Typography marginRight="20px">1.2</Typography>
              <Box
                display={"flex"}
                flexDirection={"column"}
                gap={"clamp(0px, 2vw, 20px)"}
              >
                <Typography
                  component="span"
                  sx={{
                    fontSize: "clamp(1px, 3vw, 20px)",
                  }}
                >
                  Повернення коштів можливе лише{" "}
                  <span
                    style={{
                      color: "white",
                      fontWeight: "600",
                    }}
                  >
                    у таких випадках:
                  </span>
                </Typography>
                <Typography
                  component="span"
                  sx={{
                    fontSize: "clamp(1px, 3vw, 20px)",
                  }}
                >
                  <span
                    style={{
                      color: "white",
                      fontWeight: "600",
                    }}
                  >
                    Технічна помилка
                  </span>{" "}
                  – якщо товар не надійшов протягом{" "}
                  <span
                    style={{
                      color: "white",
                      fontWeight: "600",
                    }}
                  >
                    24 годин
                  </span>
                  .
                </Typography>
                <Typography
                  component="span"
                  sx={{
                    fontSize: "clamp(1px, 3vw, 20px)",
                  }}
                >
                  <span
                    style={{
                      color: "white",
                      fontWeight: "600",
                    }}
                  >
                    Помилкова оплата
                  </span>{" "}
                  – якщо Користувач випадково замовив не той товар,
                  адміністрація заміняє на той продукт, який Користувач хотів
                  купити (залишок повертається)
                </Typography>
                <Typography
                  component="span"
                  sx={{
                    fontSize: "clamp(1px, 3vw, 20px)",
                    color: "white",
                    fontWeight: "600",
                  }}
                >
                  Не підлягають поверненню:
                  <ul
                    style={{
                      color: "#B2B2B2",
                      fontFamily: "Inter",
                      fontWeight: "400",
                      marginTop: "clamp(0px, 5vw, 20px)",
                      listStyleType: "disc",
                    }}
                  >
                    <li>Донати (якщо предмети були отримані).</li>
                    <li>Покупки, які були використані в грі.</li>
                    <li>Блокування акаунта за порушення правил.</li>
                  </ul>
                </Typography>
              </Box>
            </li>
            <li>
              <Typography color="white" marginRight="20px">
                1.3
              </Typography>
              <Typography
                component="span"
                sx={{
                  fontSize: "clamp(1px, 3vw, 20px)",
                  color: "white",
                  fontWeight: "600",
                }}
              >
                Як оформити повернення?{" "}
              </Typography>
            </li>
            {/*-======================================================*/}
            <li>
              <Typography marginRight="20px">1.4</Typography>
              <Box
                display={"flex"}
                flexDirection={"column"}
                gap={"clamp(0px, 2vw, 20px)"}
              >
                <Typography
                  component="span"
                  sx={{
                    fontSize: "clamp(1px, 3vw, 20px)",
                  }}
                >
                  Надіслати заявку на{" "}
                  <span
                    style={{
                      color: "white",
                      fontWeight: "600",
                    }}
                  >
                    @MineClub_Dev
                  </span>{" "}
                  або в{" "}
                  <span
                    style={{
                      color: "white",
                      fontWeight: "600",
                    }}
                  >
                    Discord-підтримку
                  </span>
                  .
                </Typography>
                <Typography
                  component="span"
                  sx={{
                    fontSize: "clamp(1px, 3vw, 20px)",
                  }}
                >
                  Вказати:
                  <ul
                    style={{
                      color: "#B2B2B2",
                      fontFamily: "Inter",
                      fontWeight: "400",
                      marginTop: "clamp(0px, 5vw, 20px)",
                      listStyleType: "disc",
                    }}
                  >
                    <li>Нік у грі.</li>
                    <li>Номер транзакції (з скріном оплати) або чеком.</li>
                    <li>Причину повернення.</li>
                  </ul>
                </Typography>

                <Typography
                  component="span"
                  sx={{
                    fontSize: "clamp(1px, 3vw, 20px)",
                  }}
                >
                  Розгляд –{" "}
                  <span
                    style={{
                      color: "white",
                      fontWeight: "600",
                    }}
                  >
                    до 7 днів
                  </span>
                  .
                </Typography>
              </Box>
            </li>
            <li>
              <Typography color="white" marginRight="20px">
                1.5
              </Typography>
              <Typography
                component="span"
                sx={{
                  fontSize: "clamp(1px, 3vw, 20px)",
                  color: "white",
                  fontWeight: "600",
                }}
              >
                Спосіб повернення
              </Typography>
            </li>
            <li>
              <Typography marginRight="20px">1.6</Typography>
              <Box
                display={"flex"}
                flexDirection={"column"}
                gap={"clamp(0px, 2vw, 20px)"}
              >
                <Typography
                  component="span"
                  sx={{
                    fontSize: "clamp(1px, 3vw, 20px)",
                  }}
                >
                  Гроші повертаються на{" "}
                  <span
                    style={{
                      color: "white",
                      fontWeight: "600",
                    }}
                  >
                    карту/гаманець
                  </span>
                  , з якої була оплата.
                </Typography>
                <Typography
                  component="span"
                  sx={{
                    fontSize: "clamp(1px, 3vw, 20px)",
                  }}
                >
                  Комісія платіжної системи{" "}
                  <span
                    style={{
                      color: "white",
                      fontWeight: "600",
                    }}
                  >
                    не компенсується
                  </span>
                  .
                </Typography>
              </Box>
            </li>
          </ol>
        </Box>
      </Box>
      <Box sx={{ paddingTop: "100px" }}>
        <Footer />
      </Box>
    </>
  );
}
