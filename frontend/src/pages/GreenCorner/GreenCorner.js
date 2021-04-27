import React from 'react';

const GreenCorner = () => (
    <>
    <div className="header">
    <div className="dropdown" id="#menu">
        <button className="mainmenubtn">
            <a href="#inf">Главное</a>
        </button>
        <div className="dropdown-child">
            <a href="#info">Что такое Zero Waste?</a>
            <a href="#audio">Как начать</a>
            <a href="#gallery">Плюсы & Минусы</a>
        </div>
    </div>
        <a href="/shops">Магазины</a>
        <a href="/recycling">Сортировка мусора</a>
    <a href="/eco-friendly">Eco-friendly</a>
</div>
<div id="info">
    <h2>Что такое Zero Waste?</h2>
    <div id="info_photo">
        Существует несколько правил <a href="sortirovka-musora.html">Zero Waste</a> и Zero Waste стиля жизни, первое заключается в «отказе», людям свойственно накапливать ненужные вещи, только потому, что их сложно или грустно выбрасывать, возможно потому что с этими вещами связаны воспоминания. Таким образом, можно выделить некоторые из них, которые есть практически в каждом доме, но которые очень трудно выбрасывать, а именно: пластиковые пакеты, каждый поход в магазин сопровождается покупкой пластикового пакета, который можно избежать, например, заменить на сумку-шоппер, одна такая сумка может позволить избегнуть вреда от 30 000 пластиковых пакетов. Далее идут пластиковые бутылки или контейнеры, их без труда можно заменить на стеклянные или металлические бутылки, одноразовая посуда также не нужна человеку. Это и есть осознанное потребление Zero Waste.
Второе правило: уменьшение, в данную категорию входят такие вещи, как одежда, которая одевается «на пару выходов» или «на праздник». Таким образом можно легко уменьшить количество продовольственных продуктов, не покупая не нужные, а составляя список только необходимых.
Третий принцип: необходимость повторного использования, товаров, которые вы приобретаете. 
Четвертое правило: необходимость в переработке того, что невозможно использовать повторно.
И на конец пятое: отправлять на переработку, или в компост то, что осталось.
Теперь поговорим об экологии.
Ежедневно мы сталкиваемся с последствиями изменения климата: потоп в Венеции, ноябрьский снегопад в Испании и Австралии, быстрое таяние ледников и многое другое. Примером может служить в том числе и Республика Беларусь: за последние 30 лет потеплело более, чем на один градус, а изменение в привычной погоде ощущают все граждане. Казалось бы, изменение климата очевидно, борьбу с ним включили в цели в области устойчивого развития, а в 2015 году 170 государств подписали Парижское Соглашение, взяв на себя определенные обязательства в экологической сфере. Цель данного Соглашения – добиться того, чтобы рост глобальной температуры не превышал 2 °C, в идеале – сдерживать прирост температуры на уровне ниже 1,5 °C. Цель масштабная, государств-участников достаточно, но, к сожалению, на деле все оказалось не столь светлым и положительным, как того хотелось. В скором времени после принятия Парижского Соглашения оно столкнулось с одной сложностью.

    </div>
</div>
<div id="audio">
    <iframe src="https://www.youtube.com/embed/vDHaCJCYk8k" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
</div>
<div id="gallery">
    <span>Плюсы & Минусы</span>
    <div id="carousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img className="img-fluid" src="img/101.jpg" title="коробка" alt="коробка" />
            </div>
            <div className="carousel-item">
                <img className="img-fluid" src="img/102.jpg" title="коробка" alt="коробка" />
            </div>
            <div className="carousel-item">
                <img className="img-fluid" src="img/103.jpg" title="коробка" alt="коробка" />
            </div>
        </div>
        <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Предыдущий</span>
        </a>
        <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Следующий</span>
        </a>
    </div>
</div>

<div id="footer">
    <div className="contacts">
        <a href="https://www.instagram.com/namealina_/">
            <img src="img/inst.png" title="инстаграмм" alt="инстаграм" />

            </a>
        <a href="https://vk.com/alina_strukova"><img src="img/vk.png" title="вконтакте" alt="вконтакте"/></a>
    </div>
    <div className="copyright">@2020.Created by Alina Strukova.</div>
</div>
</>
)

export default GreenCorner;