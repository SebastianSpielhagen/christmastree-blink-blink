import './App.css';

function App() {
    const n = 10;
    const tree = [];

    for(let i = 0; i < n; i++) {
        const stars = '*'.repeat(2*i + 1);
        tree.push(stars);
    }

    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; // Liste der verfügbaren Farben

    return (
        <div className="App">
            {tree.map((line, index) => (
                <p className={`tree line${index}`} key={index} style={{textAlign: 'center'}}>
                    {line.split('').map((star, index) =>
                            <span key={index} style={{
                                animation: `colorchange ${Math.random()*1}s infinite`, // Zufällige Blinkrate
                                color: colors[Math.floor(Math.random() * colors.length)] // Zufällige Farbe
                            }}>
              {star}
            </span>
                    )}
                </p>
            ))}
            {/* Zwei Zeilen für den Stamm in hellbrauner Farbe */}
            <p className="tree trunk" style={{textAlign: 'center', color: 'saddlebrown'}}>**</p>
            <p className="tree trunk" style={{textAlign: 'center', color: 'saddlebrown'}}>**</p>
            <p className="tree trunk" style={{textAlign: 'center', color: 'saddlebrown'}}>**</p>
            <p className="tree trunk" style={{textAlign: 'center', color: 'saddlebrown'}}>**</p>
            <p className="tree trunk" style={{textAlign: 'center', color: 'saddlebrown'}}>**</p>
        </div>
    );
}

export default App;