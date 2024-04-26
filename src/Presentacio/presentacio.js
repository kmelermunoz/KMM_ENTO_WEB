import foto from './FOTO CURRÍCULUM VITAE.jpeg';
import './presentacio.css';

function Presentacio() {
    return (
        <div className="Presentacio" id="Presentacio1">
            <p>Sóc una persona constant i sempre cerco objectius clars. Quan les coses es posen difícils, sé mantenir la calma i abordar els reptes amb determinació, aportant valor en diferents situacions.</p>
            <img src={foto} alt="imagen"/>
        </div>
    );
}

export default Presentacio;
