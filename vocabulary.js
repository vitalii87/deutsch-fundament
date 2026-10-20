/* Власна навчальна добірка: приблизний рівень, український переклад і авторський приклад.
 * Формат рядка: слово | артикль / частина мови | множина / основні форми | переклад | тема | приклад | переклад прикладу.
 * Рівень — орієнтир для цього значення, а не офіційна класифікація Hueber чи іспитова вимога.
 */
(() => {
  const groups = {
    A1: `
Name|der|Namen|ім’я|Люди|Mein Name ist Olena.|Мене звати Олена.
Familie|die|Familien|родина|Люди|Meine Familie wohnt hier.|Моя родина живе тут.
Schwester|die|Schwestern|сестра|Люди|Meine Schwester lernt Deutsch.|Моя сестра вивчає німецьку.
Bruder|der|Brüder|брат|Люди|Mein Bruder kommt heute.|Мій брат приїде сьогодні.
Frau|die|Frauen|жінка; пані|Люди|Die Frau heißt Anna.|Жінку звати Анна.
Mann|der|Männer|чоловік|Люди|Der Mann wartet hier.|Чоловік чекає тут.
Tag|der|Tage|день|Час|Der Tag ist schön.|День гарний.
Woche|die|Wochen|тиждень|Час|Eine Woche hat sieben Tage.|Тиждень має сім днів.
Jahr|das|Jahre|рік|Час|Ein Jahr hat zwölf Monate.|Рік має дванадцять місяців.
Uhr|die|Uhren|годинник|Час|Die Uhr ist neu.|Годинник новий.
Kaffee|der|Kaffees|кава; порція кави|Їжа|Zwei Kaffees, bitte.|Дві кави, будь ласка.
Tee|der|Tees|чай; сорт чаю|Їжа|Ich trinke gern Tee.|Я люблю пити чай.
Banane|die|Bananen|банан|Їжа|Die Banane ist gelb.|Банан жовтий.
Schule|die|Schulen|школа|Навчання|Die Schule ist klein.|Школа маленька.
Buch|das|Bücher|книжка|Навчання|Das Buch ist interessant.|Книжка цікава.
Stift|der|Stifte|ручка; олівець|Навчання|Ich suche meinen Stift.|Я шукаю свою ручку.
Sprache|die|Sprachen|мова|Навчання|Welche Sprachen sprichst du?|Якими мовами ти говориш?
Geld|das|—|гроші|Покупки|Ich brauche Geld.|Мені потрібні гроші.
Preis|der|Preise|ціна|Покупки|Der Preis ist gut.|Ціна хороша.
Supermarkt|der|Supermärkte|супермаркет|Покупки|Der Supermarkt ist offen.|Супермаркет відчинений.
wohnen|дієслово|wohnt · hat gewohnt|жити; мешкати|Дім|Ich wohne in Bonn.|Я живу в Бонні.
kommen|дієслово|kommt · ist gekommen|приходити; приїжджати|Люди|Woher kommst du?|Звідки ти?
gehen|дієслово|geht · ist gegangen|іти|Місто|Wir gehen nach Hause.|Ми йдемо додому.
lernen|дієслово|lernt · hat gelernt|вчити; вчитися|Навчання|Ich lerne jeden Tag.|Я вчуся щодня.
sprechen|дієслово|spricht · hat gesprochen|говорити|Навчання|Wir sprechen Deutsch.|Ми говоримо німецькою.
kaufen|дієслово|kauft · hat gekauft|купувати|Покупки|Ich kaufe Milch.|Я купую молоко.
essen|дієслово|isst · hat gegessen|їсти|Їжа|Was isst du gern?|Що ти любиш їсти?
trinken|дієслово|trinkt · hat getrunken|пити|Їжа|Wir trinken Wasser.|Ми п’ємо воду.
arbeiten|дієслово|arbeitet · hat gearbeitet|працювати|Робота|Sie arbeitet heute.|Вона сьогодні працює.
heißen|дієслово|heißt · hat geheißen|називатися; зватися|Люди|Wie heißt du?|Як тебе звати?
gut|прикметник|—|добрий; хороший|Опис|Das ist eine gute Idee.|Це хороша ідея.
klein|прикметник|—|маленький|Опис|Das Kind ist noch klein.|Дитина ще маленька.
groß|прикметник|—|великий; високий|Опис|Das Zimmer ist groß.|Кімната велика.
neu|прикметник|—|новий|Опис|Mein Fahrrad ist neu.|Мій велосипед новий.
alt|прикметник|—|старий|Опис|Das Haus ist alt.|Будинок старий.
teuer|прикметник|—|дорогий|Покупки|Die Jacke ist teuer.|Куртка дорога.
billig|прикметник|—|дешевий|Покупки|Das Brot ist billig.|Хліб дешевий.
heute|прислівник|—|сьогодні|Час|Heute habe ich Zeit.|Сьогодні я маю час.
morgen|прислівник|—|завтра|Час|Morgen beginnt der Kurs.|Завтра починається курс.
gern|прислівник|—|охоче; із задоволенням|Дозвілля|Ich lese gern.|Я люблю читати.
`,
    A2: `
Reise|die|Reisen|подорож|Подорожі|Die Reise dauert eine Woche.|Подорож триває тиждень.
Urlaub|der|Urlaube|відпустка|Подорожі|Im Urlaub fahren wir ans Meer.|У відпустці ми їдемо до моря.
Fahrkarte|die|Fahrkarten|проїзний квиток|Подорожі|Ich brauche eine Fahrkarte.|Мені потрібен квиток.
Flughafen|der|Flughäfen|аеропорт|Подорожі|Wir warten am Flughafen.|Ми чекаємо в аеропорту.
Gepäck|das|—|багаж|Подорожі|Mein Gepäck ist schwer.|Мій багаж важкий.
Unterkunft|die|Unterkünfte|житло для перебування|Подорожі|Wir suchen eine günstige Unterkunft.|Ми шукаємо недороге житло.
Nachbar|der|Nachbarn|сусід|Дім|Ich spreche mit dem Nachbarn.|Я розмовляю із сусідом.
Miete|die|Mieten|орендна плата|Дім|Die Miete ist hoch.|Орендна плата висока.
Umzug|der|Umzüge|переїзд|Дім|Der Umzug ist am Samstag.|Переїзд у суботу.
Heizung|die|Heizungen|опалення; обігрівач|Дім|Die Heizung funktioniert nicht.|Опалення не працює.
Rechnung|die|Rechnungen|рахунок до оплати|Покупки|Ich bezahle die Rechnung.|Я оплачую рахунок.
Kleidung|die|—|одяг|Покупки|Ich brauche warme Kleidung.|Мені потрібен теплий одяг.
Geschenk|das|Geschenke|подарунок|Люди|Das Geschenk ist für dich.|Цей подарунок для тебе.
Einladung|die|Einladungen|запрошення|Люди|Danke für die Einladung.|Дякую за запрошення.
Gesundheit|die|—|здоров’я|Здоров’я|Sport ist gut für die Gesundheit.|Спорт корисний для здоров’я.
Schmerz|der|Schmerzen|біль|Здоров’я|Ich habe Schmerzen im Rücken.|У мене болить спина.
Erkältung|die|Erkältungen|застуда|Здоров’я|Ich habe eine Erkältung.|У мене застуда.
Medikament|das|Medikamente|лікарський засіб|Здоров’я|Das Medikament hilft mir.|Ці ліки мені допомагають.
Ausbildung|die|Ausbildungen|професійна освіта; підготовка|Робота|Sie macht eine Ausbildung.|Вона здобуває професійну освіту.
Nachricht|die|Nachrichten|повідомлення; новина|Спілкування|Ich schreibe eine Nachricht.|Я пишу повідомлення.
vereinbaren|дієслово|vereinbart · hat vereinbart|домовлятися про|Робота|Wir vereinbaren einen Termin.|Ми домовляємося про зустріч.
umziehen|дієслово|zieht um · ist umgezogen|переїжджати|Дім|Wir ziehen nach Köln um.|Ми переїжджаємо до Кельна.
anrufen|дієслово|ruft an · hat angerufen|телефонувати|Спілкування|Ich rufe dich später an.|Я зателефоную тобі пізніше.
bestellen|дієслово|bestellt · hat bestellt|замовляти|Покупки|Wir bestellen eine Suppe.|Ми замовляємо суп.
bezahlen|дієслово|bezahlt · hat bezahlt|оплачувати|Покупки|Kann ich mit Karte bezahlen?|Чи можу я заплатити карткою?
erklären|дієслово|erklärt · hat erklärt|пояснювати|Навчання|Die Lehrerin erklärt die Regel.|Учителька пояснює правило.
vergessen|дієслово|vergisst · hat vergessen|забувати|Побут|Ich habe den Schlüssel vergessen.|Я забув ключ.
mitbringen|дієслово|bringt mit · hat mitgebracht|приносити із собою|Побут|Bring bitte dein Buch mit.|Принеси, будь ласка, свою книжку.
sich freuen auf + Akk|дієслово|freut sich · hat sich gefreut|радіти майбутній події|Почуття|Ich freue mich auf den Urlaub.|Я з радістю чекаю на відпустку.
fehlen|дієслово|fehlt · hat gefehlt|бути відсутнім; бракувати|Навчання|Heute fehlen zwei Personen.|Сьогодні відсутні двоє людей.
gesund|прикметник|—|здоровий|Здоров’я|Ich möchte gesund bleiben.|Я хочу залишатися здоровим.
krank|прикметник|—|хворий|Здоров’я|Mein Bruder ist krank.|Мій брат хворіє.
bequem|прикметник|—|зручний|Опис|Diese Schuhe sind bequem.|Це взуття зручне.
freundlich|прикметник|—|привітний|Люди|Die Nachbarin ist freundlich.|Сусідка привітна.
pünktlich|прикметник|—|пунктуальний; вчасний|Час|Der Bus ist heute pünktlich.|Автобус сьогодні прибуває вчасно.
zufrieden|прикметник|—|задоволений|Почуття|Ich bin mit dem Kurs zufrieden.|Я задоволений курсом.
gefährlich|прикметник|—|небезпечний|Опис|Die Straße ist hier gefährlich.|Дорога тут небезпечна.
leider|прислівник|—|на жаль|Спілкування|Leider habe ich keine Zeit.|На жаль, я не маю часу.
trotzdem|прислівник|—|попри це|Спілкування|Es regnet. Wir gehen trotzdem raus.|Дощить. Попри це ми виходимо.
deshalb|прислівник|—|тому|Спілкування|Ich bin müde. Deshalb bleibe ich hier.|Я втомився. Тому залишаюся тут.
`,
    B1: `
Erfahrung|die|Erfahrungen|досвід; пережитий випадок|Робота|Ich habe Erfahrung im Verkauf.|Я маю досвід у продажах.
Bewerbung|die|Bewerbungen|заява на вакансію|Робота|Ich schicke meine Bewerbung ab.|Я надсилаю свою заявку на вакансію.
Vorstellungsgespräch|das|Vorstellungsgespräche|співбесіда|Робота|Das Vorstellungsgespräch war angenehm.|Співбесіда була приємною.
Gehalt|das|Gehälter|зарплата|Робота|Das Gehalt wird monatlich gezahlt.|Зарплату виплачують щомісяця.
Vertrag|der|Verträge|договір|Робота|Ich lese den Vertrag genau.|Я уважно читаю договір.
Entscheidung|die|Entscheidungen|рішення|Суспільство|Diese Entscheidung ist wichtig.|Це рішення важливе.
Meinung|die|Meinungen|думка; погляд|Спілкування|Was ist deine Meinung dazu?|Яка твоя думка про це?
Vorteil|der|Vorteile|перевага|Спілкування|Die Lösung hat viele Vorteile.|Це рішення має багато переваг.
Nachteil|der|Nachteile|недолік|Спілкування|Der hohe Preis ist ein Nachteil.|Висока ціна — це недолік.
Umwelt|die|—|довкілля|Довкілля|Wir möchten die Umwelt schützen.|Ми хочемо захищати довкілля.
Verkehr|der|—|дорожній рух; транспорт|Місто|Heute gibt es viel Verkehr.|Сьогодні інтенсивний рух.
Versicherung|die|Versicherungen|страхування; страховий поліс|Побут|Welche Versicherung brauche ich?|Яке страхування мені потрібне?
Behörde|die|Behörden|державна установа|Побут|Die Behörde ist heute geschlossen.|Державна установа сьогодні зачинена.
Antrag|der|Anträge|офіційна заява|Побут|Ich stelle einen Antrag.|Я подаю заяву.
Voraussetzung|die|Voraussetzungen|передумова; вимога|Навчання|Deutschkenntnisse sind eine Voraussetzung.|Знання німецької — одна з вимог.
Verantwortung|die|—|відповідальність|Робота|Sie übernimmt die Verantwortung.|Вона бере на себе відповідальність.
Beziehung|die|Beziehungen|стосунок; зв’язок|Люди|Wir haben eine gute Beziehung.|У нас хороші стосунки.
Gewohnheit|die|Gewohnheiten|звичка|Побут|Lesen ist eine gute Gewohnheit.|Читання — хороша звичка.
Fortschritt|der|Fortschritte|поступ; прогрес|Навчання|Du machst große Fortschritte.|Ти робиш великі успіхи.
Ziel|das|Ziele|мета|Навчання|Mein Ziel ist die B1-Prüfung.|Моя мета — іспит B1.
sich bewerben um + Akk|дієслово|bewirbt sich · hat sich beworben|подаватися на вакансію|Робота|Ich bewerbe mich um diese Stelle.|Я подаюся на цю вакансію.
sich entscheiden für + Akk|дієслово|entscheidet sich · hat sich entschieden|обирати; вирішувати на користь|Побут|Wir entscheiden uns für den Zug.|Ми обираємо потяг.
vergleichen|дієслово|vergleicht · hat verglichen|порівнювати|Покупки|Ich vergleiche die Preise.|Я порівнюю ціни.
vermeiden|дієслово|vermeidet · hat vermieden|уникати|Побут|Wir vermeiden unnötigen Müll.|Ми уникаємо зайвого сміття.
teilnehmen an + Dat|дієслово|nimmt teil · hat teilgenommen|брати участь у|Навчання|Ich nehme an einem Kurs teil.|Я відвідую курс.
vorschlagen|дієслово|schlägt vor · hat vorgeschlagen|пропонувати|Спілкування|Ich schlage einen anderen Termin vor.|Я пропоную інший час зустрічі.
begründen|дієслово|begründet · hat begründet|обґрунтовувати|Спілкування|Bitte begründen Sie Ihre Meinung.|Будь ласка, обґрунтуйте свою думку.
unterstützen|дієслово|unterstützt · hat unterstützt|підтримувати|Люди|Meine Familie unterstützt mich.|Моя родина мене підтримує.
sich beschweren über + Akk|дієслово|beschwert sich · hat sich beschwert|скаржитися на|Побут|Er beschwert sich über den Lärm.|Він скаржиться на шум.
erreichen|дієслово|erreicht · hat erreicht|досягати|Навчання|Wir haben unser Ziel erreicht.|Ми досягли своєї мети.
zuverlässig|прикметник|—|надійний|Робота|Meine Kollegin ist zuverlässig.|Моя колега надійна.
selbstständig|прикметник|—|самостійний|Робота|Sie arbeitet sehr selbstständig.|Вона працює дуже самостійно.
notwendig|прикметник|—|необхідний|Побут|Eine Anmeldung ist notwendig.|Реєстрація необхідна.
verantwortlich|прикметник|—|відповідальний за щось|Робота|Wer ist dafür verantwortlich?|Хто за це відповідає?
wahrscheinlich|прикметник|—|імовірний; імовірно|Спілкування|Sie kommt wahrscheinlich morgen.|Імовірно, вона прийде завтра.
ähnlich|прикметник|—|подібний|Опис|Die beiden Wörter sind ähnlich.|Ці два слова подібні.
unterschiedlich|прикметник|—|різний|Опис|Wir haben unterschiedliche Ziele.|У нас різні цілі.
außerdem|прислівник|—|крім того|Спілкування|Der Kurs ist günstig. Außerdem ist er online.|Курс недорогий. Крім того, він онлайн.
inzwischen|прислівник|—|тим часом; на цей час|Час|Inzwischen verstehe ich viel mehr.|Тепер я розумію набагато більше.
regelmäßig|прикметник|—|регулярний; регулярно|Навчання|Ich wiederhole die Wörter regelmäßig.|Я регулярно повторюю слова.
`,
    B2: `
Herausforderung|die|Herausforderungen|виклик; складне завдання|Робота|Das Projekt ist eine Herausforderung.|Цей проєкт — складне завдання.
Vereinbarung|die|Vereinbarungen|домовленість|Робота|Wir halten uns an die Vereinbarung.|Ми дотримуємося домовленості.
Maßnahme|die|Maßnahmen|захід; дія для досягнення мети|Суспільство|Die Maßnahme spart Energie.|Цей захід заощаджує енергію.
Auswirkung|die|Auswirkungen|вплив; наслідок|Суспільство|Die Änderung hat positive Auswirkungen.|Зміна має позитивні наслідки.
Zusammenhang|der|Zusammenhänge|взаємозв’язок|Навчання|Ich verstehe den Zusammenhang.|Я розумію цей зв’язок.
Standpunkt|der|Standpunkte|позиція; погляд|Спілкування|Sie erklärt ihren Standpunkt.|Вона пояснює свою позицію.
Beitrag|der|Beiträge|внесок; матеріал у медіа|Медіа|Der Beitrag informiert über das Thema.|Цей матеріал інформує про тему.
Nachfrage|die|—|попит|Економіка|Die Nachfrage nach Wohnungen steigt.|Попит на квартири зростає.
Angebot|das|Angebote|пропозиція|Економіка|Wir prüfen das Angebot der Firma.|Ми перевіряємо пропозицію компанії.
Wettbewerb|der|Wettbewerbe|конкуренція; конкурс|Економіка|Der Wettbewerb zwischen Firmen ist stark.|Конкуренція між компаніями сильна.
Qualifikation|die|Qualifikationen|кваліфікація|Робота|Die Stelle verlangt besondere Qualifikationen.|Ця посада вимагає особливої кваліфікації.
Weiterbildung|die|Weiterbildungen|підвищення кваліфікації|Робота|Die Firma bezahlt eine Weiterbildung.|Компанія оплачує підвищення кваліфікації.
Datenschutz|der|—|захист персональних даних|Медіа|Datenschutz ist für uns wichtig.|Захист даних для нас важливий.
Vorurteil|das|Vorurteile|упередження|Суспільство|Persönliche Kontakte können Vorurteile abbauen.|Особисті контакти можуть зменшувати упередження.
Gleichberechtigung|die|—|рівноправність|Суспільство|Wir setzen uns für Gleichberechtigung ein.|Ми виступаємо за рівноправність.
Nachhaltigkeit|die|—|сталість розвитку|Довкілля|Nachhaltigkeit spielt eine wichtige Rolle.|Сталість розвитку відіграє важливу роль.
Ressource|die|Ressourcen|ресурс|Довкілля|Wir müssen Ressourcen schonen.|Ми маємо берегти ресурси.
Umsetzung|die|Umsetzungen|втілення; реалізація|Робота|Die Umsetzung des Plans beginnt morgen.|Реалізація плану починається завтра.
Stellungnahme|die|Stellungnahmen|виклад позиції; офіційна заява|Спілкування|Die Organisation veröffentlicht eine Stellungnahme.|Організація оприлюднює заяву.
Forschung|die|Forschungen|наукові дослідження|Навчання|Die Forschung liefert neue Erkenntnisse.|Дослідження дають нові знання.
berücksichtigen|дієслово|berücksichtigt · hat berücksichtigt|враховувати|Робота|Wir berücksichtigen Ihre Wünsche.|Ми враховуємо ваші побажання.
gewährleisten|дієслово|gewährleistet · hat gewährleistet|гарантувати; забезпечувати|Робота|Das System gewährleistet einen sicheren Zugang.|Система забезпечує безпечний доступ.
beeinflussen|дієслово|beeinflusst · hat beeinflusst|впливати на|Суспільство|Werbung beeinflusst unser Verhalten.|Реклама впливає на нашу поведінку.
einschätzen|дієслово|schätzt ein · hat eingeschätzt|оцінювати|Робота|Wie schätzen Sie die Lage ein?|Як ви оцінюєте ситуацію?
nachweisen|дієслово|weist nach · hat nachgewiesen|доводити; документально підтверджувати|Навчання|Sie muss ihre Kenntnisse nachweisen.|Вона має підтвердити свої знання.
verfügen über + Akk|дієслово|verfügt · hat verfügt|мати у розпорядженні|Робота|Das Team verfügt über viel Erfahrung.|Команда має великий досвід.
beitragen zu + Dat|дієслово|trägt bei · hat beigetragen|сприяти; робити внесок у|Суспільство|Bewegung trägt zur Gesundheit bei.|Рух сприяє здоров’ю.
sich auseinandersetzen mit + Dat|дієслово|setzt sich auseinander · hat sich auseinandergesetzt|ґрунтовно розглядати; займатися питанням|Навчання|Wir setzen uns mit dem Thema auseinander.|Ми ґрунтовно розглядаємо цю тему.
ablehnen|дієслово|lehnt ab · hat abgelehnt|відхиляти|Спілкування|Sie lehnt den Vorschlag ab.|Вона відхиляє пропозицію.
umsetzen|дієслово|setzt um · hat umgesetzt|втілювати|Робота|Wir setzen die Idee gemeinsam um.|Ми разом втілюємо ідею.
nachhaltig|прикметник|—|сталий; довготривалий|Довкілля|Wir suchen eine nachhaltige Lösung.|Ми шукаємо стале рішення.
wesentlich|прикметник|—|суттєвий|Опис|Das ist ein wesentlicher Unterschied.|Це суттєва відмінність.
angemessen|прикметник|—|відповідний; доречний|Опис|Wir brauchen eine angemessene Lösung.|Нам потрібне відповідне рішення.
umstritten|прикметник|—|спірний; дискусійний|Суспільство|Die Entscheidung ist umstritten.|Це рішення викликає суперечки.
überzeugend|прикметник|—|переконливий|Спілкування|Dein Argument ist überzeugend.|Твій аргумент переконливий.
langfristig|прикметник|—|довгостроковий|Робота|Wir planen eine langfristige Zusammenarbeit.|Ми плануємо довгострокову співпрацю.
vielfältig|прикметник|—|різноманітний|Опис|Die Aufgaben sind vielfältig.|Завдання різноманітні.
grundsätzlich|прислівник|—|принципово; загалом|Спілкування|Grundsätzlich stimme ich dir zu.|Загалом я з тобою згоден.
hingegen|прислівник|—|натомість|Спілкування|Ich fahre Rad. Sie hingegen nimmt den Bus.|Я їду велосипедом. Вона натомість їде автобусом.
dennoch|прислівник|—|усе ж; проте|Спілкування|Der Plan ist teuer. Dennoch ist er sinnvoll.|План дорогий. Проте він доцільний.
`,
    C1: `
Sachverhalt|der|Sachverhalte|обставини справи; фактичний стан речей|Спілкування|Wir müssen den Sachverhalt genau prüfen.|Ми маємо ретельно перевірити обставини справи.
Tragweite|die|—|масштаб наслідків; значущість|Суспільство|Die Tragweite der Entscheidung wird deutlich.|Масштаб наслідків рішення стає зрозумілим.
Widerspruch|der|Widersprüche|суперечність; заперечення|Спілкування|Zwischen den Aussagen besteht ein Widerspruch.|Між твердженнями є суперечність.
Anspruch|der|Ansprüche|вимога; право на щось|Суспільство|Das Konzept erfüllt hohe Ansprüche.|Ця концепція відповідає високим вимогам.
Erkenntnis|die|Erkenntnisse|усвідомлення; здобуте знання|Навчання|Die Studie liefert eine wichtige Erkenntnis.|Дослідження дає важливе нове знання.
Verhältnismäßigkeit|die|—|співмірність|Суспільство|Die Verhältnismäßigkeit der Maßnahme wird geprüft.|Перевіряють співмірність цього заходу.
Handlungsspielraum|der|Handlungsspielräume|свобода дій; простір для рішень|Робота|Das Team braucht mehr Handlungsspielraum.|Команді потрібно більше свободи дій.
Rahmenbedingung|die|Rahmenbedingungen|рамкова умова|Робота|Die Rahmenbedingungen haben sich verändert.|Рамкові умови змінилися.
Interessenkonflikt|der|Interessenkonflikte|конфлікт інтересів|Суспільство|Der Interessenkonflikt muss offengelegt werden.|Конфлікт інтересів потрібно розкрити.
Zielsetzung|die|Zielsetzungen|визначення мети; поставлена мета|Робота|Die Zielsetzung des Projekts ist klar.|Мета проєкту зрозуміла.
Abwägung|die|Abwägungen|зважування аргументів|Спілкування|Die Entscheidung erfordert eine sorgfältige Abwägung.|Рішення потребує ретельного зважування аргументів.
Schlussfolgerung|die|Schlussfolgerungen|висновок|Навчання|Welche Schlussfolgerung ziehen Sie daraus?|Який висновок ви з цього робите?
Diskrepanz|die|Diskrepanzen|розбіжність|Навчання|Es gibt eine Diskrepanz zwischen Plan und Ergebnis.|Є розбіжність між планом і результатом.
Glaubwürdigkeit|die|—|достовірність; довіра до когось|Медіа|Die Quellen stärken die Glaubwürdigkeit des Berichts.|Джерела посилюють довіру до звіту.
Stellenwert|der|—|значення; роль у системі цінностей|Суспільство|Bildung hat einen hohen Stellenwert.|Освіта має велике значення.
Wechselwirkung|die|Wechselwirkungen|взаємодія; взаємний вплив|Навчання|Die Wechselwirkungen sind noch unklar.|Взаємні впливи ще не з’ясовані.
Herangehensweise|die|Herangehensweisen|підхід до завдання|Робота|Diese Herangehensweise spart Zeit.|Цей підхід заощаджує час.
Beständigkeit|die|—|сталість; стійкість|Опис|Beständigkeit ist eine Stärke des Materials.|Стійкість — перевага цього матеріалу.
Einwand|der|Einwände|заперечення; зауваження|Спілкування|Ihr Einwand ist berechtigt.|Ваше зауваження слушне.
Anhaltspunkt|der|Anhaltspunkte|ознака; підстава для висновку|Навчання|Dafür gibt es keine Anhaltspunkte.|Для цього немає підстав.
abwägen|дієслово|wägt ab · hat abgewogen|зважувати аргументи|Спілкування|Wir wägen Chancen und Risiken ab.|Ми зважуємо можливості та ризики.
erörtern|дієслово|erörtert · hat erörtert|ґрунтовно обговорювати|Спілкування|Der Ausschuss erörtert den Vorschlag.|Комітет ґрунтовно обговорює пропозицію.
nachvollziehen|дієслово|vollzieht nach · hat nachvollzogen|зрозуміти хід думки чи причини|Спілкування|Ich kann Ihre Bedenken nachvollziehen.|Я можу зрозуміти ваші побоювання.
voraussetzen|дієслово|setzt voraus · hat vorausgesetzt|передбачати як необхідну умову|Навчання|Die Aufgabe setzt Fachwissen voraus.|Завдання передбачає наявність фахових знань.
relativieren|дієслово|relativiert · hat relativiert|показувати відносність; пом’якшувати оцінку|Спілкування|Neue Daten relativieren die frühere Aussage.|Нові дані змушують пом’якшити попереднє твердження.
untermauern|дієслово|untermauert · hat untermauert|підкріплювати доказами|Навчання|Die Zahlen untermauern ihre These.|Цифри підкріплюють її тезу.
einräumen|дієслово|räumt ein · hat eingeräumt|визнавати; допускати|Спілкування|Er räumt einen Fehler ein.|Він визнає помилку.
herleiten|дієслово|leitet her · hat hergeleitet|виводити логічно|Навчання|Die Regel lässt sich logisch herleiten.|Правило можна вивести логічно.
differenzieren|дієслово|differenziert · hat differenziert|розрізняти; аналізувати з урахуванням відмінностей|Навчання|Wir müssen zwischen den Fällen differenzieren.|Ми маємо розрізняти ці випадки.
zum Ausdruck bringen|дієслово|bringt zum Ausdruck · hat zum Ausdruck gebracht|висловлювати|Спілкування|Sie bringt ihre Sorge zum Ausdruck.|Вона висловлює своє занепокоєння.
schlüssig|прикметник|—|логічно послідовний; переконливий|Спілкування|Die Argumentation ist schlüssig.|Аргументація логічно послідовна.
nachvollziehbar|прикметник|—|зрозумілий; такий, що можна простежити|Спілкування|Die Begründung ist nachvollziehbar.|Обґрунтування зрозуміле.
maßgeblich|прикметник|—|визначальний; вирішальний|Робота|Ihre Erfahrung war maßgeblich für den Erfolg.|Її досвід був вирішальним для успіху.
unabdingbar|прикметник|—|неодмінний; вкрай необхідний|Робота|Vertrauen ist für die Zusammenarbeit unabdingbar.|Довіра вкрай необхідна для співпраці.
ambivalent|прикметник|—|суперечливий; двоїстий|Почуття|Seine Haltung zu dem Thema ist ambivalent.|Його ставлення до теми двоїсте.
stichhaltig|прикметник|—|вагомий; обґрунтований|Спілкування|Dafür fehlen stichhaltige Beweise.|Для цього бракує вагомих доказів.
vermeintlich|прикметник|—|гаданий; удаваний|Опис|Der vermeintliche Vorteil erwies sich als Nachteil.|Гадана перевага виявилася недоліком.
unerlässlich|прикметник|—|необхідний; незамінний|Навчання|Eine genaue Quellenprüfung ist unerlässlich.|Ретельна перевірка джерел необхідна.
infolgedessen|прислівник|—|унаслідок цього|Спілкування|Die Nachfrage sank. Infolgedessen fiel der Preis.|Попит знизився. Унаслідок цього впала ціна.
nichtsdestotrotz|прислівник|—|попри все це|Спілкування|Die Aufgabe ist schwierig. Nichtsdestotrotz versuchen wir es.|Завдання складне. Попри все це ми спробуємо.
`
  };
  const words = window.FUNDAMENT.words;
  words.forEach(w => { w[7] = 'A1'; w[8] = 'Іменник'; });
  for (const [level, text] of Object.entries(groups)) {
    for (const line of text.trim().split('\n')) {
      const [word, kind, forms, uk, topic, example, translation] = line.trim().split('|');
      const noun = ['der','die','das'].includes(kind);
      words.push([word, noun ? kind : '', noun ? forms : '—', uk, topic, example, translation, level,
        noun ? 'Іменник' : kind[0].toUpperCase() + kind.slice(1), noun ? '' : forms === '—' ? '' : forms]);
    }
  }
  window.VOCABULARY_REFERENCES = [
    {title:'Hueber · Menschen: матеріали A1–B1',url:'https://www.hueber.de/reihe/menschen/lernen'},
    {title:'Hueber · Sicher!: матеріали B1+–C1',url:'https://www.hueber.de/reihe/sicher/lernen'},
    {title:'Hueber · Wortschatz & Grammatik',url:'https://www.hueber.de/reihe/deutsch-ueben-wortschatz-grammatik'}
  ];
})();
