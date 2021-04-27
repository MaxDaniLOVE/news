import React from 'react';

const Shops = () => (
 <>
 <div className="header">
        <a href="/green-corner">Главное</a>
        <a href="/shops">Магазины</a>
        <a href="/recycling">Сортировка мусора</a>
        <a href="/eco-friendly">Eco-friendly</a>
    </div>
    <div id="map"></div>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDDWgDzcYiZvk1GzctlKOcgqgjtUCLAe3w&callback=initMap" async defer></script>
    <div id="footer">
        <div className="contacts">
            <a href="https://www.instagram.com/namealina_/"><img src="img/inst.png" title="инстаграм" alt="инстаграм" /></a>
            <a href="https://vk.com/alina_strukova"><img src="img/vk.png" title="вконтакте" alt="вконтакте" /></a>
        </div>
        <div className="copyright">@2020.Created by Alina Strukova.</div>
    </div>
 </>
)

export default Shops