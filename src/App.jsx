import React, {useState} from 'react';
import './App.css';

function App() {
    const [lightOn, setLightOn] = useState(false);
    console.log(lightOn);

    return (
        <main className={lightOn === false ? "off" : "on"}>
            <section>
                <div className="dot"></div>
                <button
                    type="button"
                    onClick={() => {setLightOn(!lightOn)}}

                >
                    {lightOn === false ? "Turn off" : "Turn on"}
                </button>
            </section>
        </main>
    );
}

export default App;
