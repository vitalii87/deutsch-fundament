/* Навчальні дані зберігаються окремо від інтерфейсу. Без зовнішніх запитів. */
window.FUNDAMENT = {
  modules: [
    {id:'markers',icon:'⌖',nav:'Слова-маркери',title:'Спочатку поміть підказку.',subtitle:'Не знаєш, яке поставити питання? Знайди знайоме слово — воно підкаже відмінок.',eyebrow:'01 / ГРАМАТИЧНИЙ КОМПАС'},
    {id:'articles',icon:'▦',nav:'Відмінки й артиклі',title:'Артиклі стають зрозумілими.',subtitle:'Три основні відмінки, чотири короткі стовпчики. Колір допомагає триматися за рід.',eyebrow:'02 / ТАБЛИЦІ ФОРМ'},
    {id:'place',icon:'⇄',nav:'Де чи куди?',title:'Місце чи нова точка?',subtitle:'Пари прикладів для an, auf, hinter, in, neben, über, unter, vor, zwischen.',eyebrow:'03 / WECHSELPRÄPOSITIONEN'},
    {id:'verbs',icon:'↗',nav:'Дієслова + відмінок',title:'Вчи дієслово з формулою.',subtitle:'helfen + Dativ, sehen + Akkusativ. Готові конструкції замість здогадок за перекладом.',eyebrow:'04 / VERBEN + KASUS'},
    {id:'pronouns',icon:'◎',nav:'Займенники',title:'Від ich до mir.',subtitle:'Особові займенники та присвійні слова: потрібна форма завжди під рукою.',eyebrow:'05 / PRONOMEN'},
    {id:'order',icon:'≡',nav:'Порядок слів',title:'У кожного слова своє місце.',subtitle:'Прості схеми розповідних речень, запитань і підрядних частин.',eyebrow:'06 / WORTSTELLUNG'},
    {id:'basics',icon:'◇',nav:'Дієслівна основа',title:'Три опори для речення.',subtitle:'sein, haben, модальні дієслова й перші кроки в минулий час.',eyebrow:'07 / VERBEN IM ALLTAG'},
    {id:'pairs',icon:'↔',nav:'20 пар прикладів',title:'Порівняй. Поміть. Запам’ятай.',subtitle:'Читай дві фрази поруч і стеж за тим, що саме змінюється.',eyebrow:'08 / КОНТРАСТНІ ПАРИ'},
    {id:'dictionary',icon:'▧',nav:'Тематичний словник',title:'Слова, які живуть поруч.',subtitle:'Слова A1–C1 за темами: артиклі, множина, форми дієслів і приклади. Обери слова для друку.',eyebrow:'09 / WORTSCHATZ'},
    {id:'guide',icon:'?',nav:'Як користуватися',title:'Власний маленький фундамент.',subtitle:'Короткий маршрут від першої таблиці до впевненого впізнавання форм.',eyebrow:'10 / ТВОЯ ПРАКТИКА'}
  ],
  signals: [
    ['durch','Akkusativ','через','Wir gehen durch den Park.','Ми йдемо через парк.'],
    ['für','Akkusativ','для','Das ist für den Mann.','Це для чоловіка.'],
    ['gegen','Akkusativ','проти; близько (про час)','Wir spielen gegen die Mannschaft.','Ми граємо проти команди.'],
    ['ohne','Akkusativ','без','Ich komme ohne meinen Bruder.','Я прийду без свого брата.'],
    ['um','Akkusativ','навколо; о (про час)','Wir sitzen um den Tisch.','Ми сидимо навколо столу.'],
    ['bis','Akkusativ','до','Ich bleibe bis Freitag.','Я залишуся до п’ятниці.','Часто без артикля. У bis zu відмінком керує zu: bis zum Bahnhof (Dativ).'],
    ['aus','Dativ','з, із (зсередини; походження)','Sie kommt aus dem Haus.','Вона виходить із будинку.'],
    ['bei','Dativ','у; біля','Ich bin bei der Ärztin.','Я у лікарки.'],
    ['mit','Dativ','з; за допомогою','Ich fahre mit dem Bus.','Я їду автобусом.'],
    ['nach','Dativ','після; до (міст, країн без артикля)','Nach dem Kurs gehe ich nach Hause.','Після курсу я йду додому.'],
    ['seit','Dativ','від; вже протягом','Ich lerne seit einem Jahr Deutsch.','Я вивчаю німецьку вже рік.'],
    ['von','Dativ','від; про; з','Das Geschenk ist von meiner Mutter.','Подарунок від моєї мами.'],
    ['zu','Dativ','до','Ich gehe zu dem Arzt.','Я йду до лікаря.','zu dem → zum, zu der → zur. Напрямок не змінює Dativ після zu.'],
    ['gegenüber','Dativ','навпроти','Die Bank ist gegenüber dem Bahnhof.','Банк навпроти вокзалу.'],
    ['wegen','Genitiv','через (причина)','Wegen des Regens bleiben wir zu Hause.','Через дощ ми залишаємося вдома.','У стандартній письмовій мові — Genitiv; у розмовній трапляється Dativ.'],
    ['während','Genitiv','під час','Während des Kurses sprechen wir Deutsch.','Під час курсу ми говоримо німецькою.'],
    ['trotz','Genitiv','попри','Trotz des Regens gehen wir spazieren.','Попри дощ ми йдемо гуляти.'],
    ['innerhalb','Genitiv','у межах; протягом','Innerhalb eines Monats lerne ich viel.','За місяць я багато вивчаю.'],
    ['außerhalb','Genitiv','поза межами','Wir wohnen außerhalb der Stadt.','Ми живемо за містом.']
  ],
  verbGroups: [
    {name:'Дієслово + Akkusativ',tag:'Akkusativ',rows:[['sehen','бачити','Ich sehe den Mann.','Я бачу чоловіка.'],['hören','чути','Ich höre die Musik.','Я чую музику.'],['brauchen','потребувати','Ich brauche einen Stift.','Мені потрібна ручка.'],['besuchen','відвідувати','Ich besuche meine Freundin.','Я відвідую свою подругу.'],['haben','мати','Ich habe einen Hund.','У мене є собака.']]},
    {name:'Дієслово + Dativ',tag:'Dativ',rows:[['helfen','допомагати','Ich helfe dem Kind.','Я допомагаю дитині.'],['danken','дякувати','Ich danke dir.','Я дякую тобі.'],['gefallen','подобатися','Das Buch gefällt mir.','Мені подобається книжка.'],['gehören','належати','Der Schlüssel gehört der Frau.','Ключ належить жінці.'],['antworten','відповідати','Ich antworte dem Lehrer.','Я відповідаю вчителю.']]},
    {name:'Дієслово + Dativ + Akkusativ',tag:'Dat + Akk',rows:[['geben','давати','Ich gebe dem Kind das Buch.','Я даю дитині книжку.'],['zeigen','показувати','Ich zeige dir den Weg.','Я показую тобі дорогу.'],['schicken','надсилати','Ich schicke meiner Mutter einen Brief.','Я надсилаю мамі листа.'],['schenken','дарувати','Ich schenke meinem Bruder ein Buch.','Я дарую братові книжку.']]},
    {name:'Дієслово + прийменник',tag:'Конструкція',rows:[['warten auf + Akk','чекати на','Ich warte auf den Bus.','Я чекаю на автобус.'],['denken an + Akk','думати про','Ich denke an meine Familie.','Я думаю про свою родину.'],['sprechen mit + Dat','говорити з','Ich spreche mit dem Lehrer.','Я говорю з учителем.'],['träumen von + Dat','мріяти про; бачити уві сні','Ich träume von einem Urlaub.','Я мрію про відпустку.']]}
  ],
  pairs: [
    ['Місце → напрямок','Ich bin in dem Park.','Я в парку.','Ich gehe in den Park.','Я йду в парк.'],
    ['Місце → напрямок','Das Buch liegt auf dem Tisch.','Книжка лежить на столі.','Ich lege das Buch auf den Tisch.','Я кладу книжку на стіл.'],
    ['Місце → напрямок','Die Lampe steht neben dem Bett.','Лампа стоїть біля ліжка.','Ich stelle die Lampe neben das Bett.','Я ставлю лампу біля ліжка.'],
    ['Місце → напрямок','Das Bild hängt an der Wand.','Картина висить на стіні.','Ich hänge das Bild an die Wand.','Я вішаю картину на стіну.'],
    ['Рух у межах → вхід','Ich laufe im Park.','Я бігаю в парку.','Ich laufe in den Park.','Я забігаю в парк.'],
    ['mit → für','Das ist mit dem Lehrer.','Це з учителем.','Das ist für den Lehrer.','Це для вчителя.'],
    ['helfen → sehen','Ich helfe dem Mann.','Я допомагаю чоловікові.','Ich sehe den Mann.','Я бачу чоловіка.'],
    ['mir → mich','Sie hilft mir.','Вона допомагає мені.','Sie besucht mich.','Вона відвідує мене.'],
    ['dir → dich','Ich danke dir.','Я дякую тобі.','Ich höre dich.','Я чую тебе.'],
    ['bei → zu','Ich bin beim Arzt.','Я у лікаря.','Ich gehe zum Arzt.','Я йду до лікаря.'],
    ['im → ins','Ich bin im Haus.','Я в будинку.','Ich gehe ins Haus.','Я йду в будинок.'],
    ['aus → in','Ich komme aus dem Haus.','Я виходжу з будинку.','Ich gehe in das Haus.','Я заходжу в будинок.'],
    ['Підмет → об’єкт','Der Mann kommt.','Чоловік приходить.','Ich sehe den Mann.','Я бачу чоловіка.'],
    ['ein → einen','Das ist ein Hund.','Це собака.','Ich habe einen Hund.','У мене є собака.'],
    ['Присвійні форми','Das ist mein Bruder.','Це мій брат.','Ich helfe meinem Bruder.','Я допомагаю своєму братові.'],
    ['Множина в Dativ','Die Kinder spielen.','Діти граються.','Ich spiele mit den Kindern.','Я граюся з дітьми.'],
    ['Дієслівна рамка','Ich lerne Deutsch.','Я вивчаю німецьку.','Ich möchte Deutsch lernen.','Я хотів би вивчати німецьку.'],
    ['Перший елемент','Ich lerne heute Deutsch.','Я сьогодні вивчаю німецьку.','Heute lerne ich Deutsch.','Сьогодні я вивчаю німецьку.'],
    ['weil → deshalb','Ich bleibe zu Hause, weil ich krank bin.','Я залишаюся вдома, бо хворію.','Ich bin krank. Deshalb bleibe ich zu Hause.','Я хворію. Тому залишаюся вдома.'],
    ['haben → sein у Perfekt','Ich habe Deutsch gelernt.','Я вивчав німецьку.','Ich bin nach Berlin gefahren.','Я поїхав до Берліна.']
  ],
  words: [
    ['Haus','das','Häuser','будинок','Дім','Das Haus ist groß.','Будинок великий.'],['Wohnung','die','Wohnungen','квартира','Дім','Die Wohnung ist hell.','Квартира світла.'],['Zimmer','das','Zimmer','кімната','Дім','Das Zimmer ist klein.','Кімната маленька.'],['Tisch','der','Tische','стіл','Дім','Das Buch liegt auf dem Tisch.','Книжка лежить на столі.'],['Stuhl','der','Stühle','стілець','Дім','Ich sitze auf dem Stuhl.','Я сиджу на стільці.'],['Bett','das','Betten','ліжко','Дім','Das Bett ist bequem.','Ліжко зручне.'],['Tür','die','Türen','двері','Дім','Die Tür ist offen.','Двері відчинені.'],['Fenster','das','Fenster','вікно','Дім','Ich öffne das Fenster.','Я відчиняю вікно.'],
    ['Bus','der','Busse','автобус','Місто','Ich fahre mit dem Bus.','Я їду автобусом.'],['Bahnhof','der','Bahnhöfe','вокзал','Місто','Ich gehe zum Bahnhof.','Я йду до вокзалу.'],['Straße','die','Straßen','вулиця','Місто','Die Straße ist lang.','Вулиця довга.'],['Park','der','Parks','парк','Місто','Wir gehen in den Park.','Ми йдемо в парк.'],['Apotheke','die','Apotheken','аптека','Місто','Die Apotheke ist neben der Bank.','Аптека біля банку.'],['Geschäft','das','Geschäfte','магазин','Місто','Das Geschäft ist geschlossen.','Магазин зачинений.'],['Fahrrad','das','Fahrräder','велосипед','Місто','Ich fahre mit dem Fahrrad.','Я їду велосипедом.'],['Haltestelle','die','Haltestellen','зупинка','Місто','Ich warte an der Haltestelle.','Я чекаю на зупинці.'],
    ['Brot','das','Brote','хліб','Їжа','Ich kaufe ein Brot.','Я купую хлібину.'],['Apfel','der','Äpfel','яблуко','Їжа','Ich esse einen Apfel.','Я їм яблуко.'],['Kartoffel','die','Kartoffeln','картоплина','Їжа','Ich koche Kartoffeln.','Я варю картоплю.'],['Ei','das','Eier','яйце','Їжа','Ich brauche zwei Eier.','Мені потрібні два яйця.'],['Tomate','die','Tomaten','помідор','Їжа','Die Tomate ist rot.','Помідор червоний.'],['Käse','der','—','сир','Їжа','Ich esse gern Käse.','Я люблю їсти сир.'],['Wasser','das','—','вода','Їжа','Ich trinke Wasser.','Я п’ю воду.'],['Milch','die','—','молоко','Їжа','Die Milch ist im Kühlschrank.','Молоко в холодильнику.'],
    ['Beruf','der','Berufe','професія','Робота','Was sind Sie von Beruf?','Хто ви за професією?'],['Büro','das','Büros','офіс','Робота','Ich arbeite im Büro.','Я працюю в офісі.'],['Kollege','der','Kollegen','колега (чоловік)','Робота','Ich helfe dem Kollegen.','Я допомагаю колезі.'],['Kollegin','die','Kolleginnen','колега (жінка)','Робота','Meine Kollegin ist nett.','Моя колега привітна.'],['Termin','der','Termine','зустріч; призначений час','Робота','Ich habe morgen einen Termin.','У мене завтра призначена зустріч.'],['Pause','die','Pausen','перерва','Робота','Wir machen eine Pause.','Ми робимо перерву.'],['Computer','der','Computer','комп’ютер','Робота','Der Computer ist neu.','Комп’ютер новий.'],['Aufgabe','die','Aufgaben','завдання','Робота','Ich verstehe die Aufgabe.','Я розумію завдання.'],
    ['Mutter','die','Mütter','мама; мати','Люди','Ich telefoniere mit meiner Mutter.','Я розмовляю з мамою телефоном.'],['Vater','der','Väter','батько','Люди','Mein Vater kocht gern.','Мій батько любить готувати.'],['Kind','das','Kinder','дитина','Люди','Ich helfe dem Kind.','Я допомагаю дитині.'],['Freund','der','Freunde','друг','Люди','Ich besuche meinen Freund.','Я відвідую свого друга.'],['Freundin','die','Freundinnen','подруга','Люди','Ich spreche mit meiner Freundin.','Я говорю зі своєю подругою.'],['Arzt','der','Ärzte','лікар','Люди','Ich gehe zum Arzt.','Я йду до лікаря.'],['Ärztin','die','Ärztinnen','лікарка','Люди','Die Ärztin hilft mir.','Лікарка допомагає мені.'],['Lehrer','der','Lehrer','учитель','Люди','Ich frage den Lehrer.','Я запитую вчителя.']
  ]
};
