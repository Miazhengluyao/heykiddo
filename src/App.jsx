import { useState } from "react";

const moods = [
  { id: "burn", title: "Toddler Energy Burn", desc: "Let them run it out" },
  { id: "calm", title: "Calm Nature Walk", desc: "Slow pace, low stimulation" },
  { id: "play", title: "Playground Adventure", desc: "Classic playground fun" },
  { id: "picnic", title: "Picnic & Chill", desc: "Eat, relax, roam" },
  { id: "water", title: "Water Play Day", desc: "Splash & sensory fun" },
  { id: "active", title: "Active / Sports Day", desc: "Run, bike, move" },
  { id: "quiet", title: "Quiet Walk", desc: "Wind-down stroll" }
];

const parks = {
  burn: [
    { name: "Gage Park", reason: "Big playground + open space" },
    { name: "Garfield Park", reason: "Simple playground setup" }
  ],
  calm: [
    { name: "Lake Shawnee Park", reason: "Trails + lake views" },
    { name: "Gage Rose Garden", reason: "Low stimulation zone" }
  ],
  picnic: [
    { name: "Gage Park", reason: "Tables + shade + space" },
    { name: "Lake Shawnee Park", reason: "Scenic picnic spots" }
  ],
  play: [
    { name: "Gage Park", reason: "Carousel + zoo + playground" },
    { name: "Neighborhood Parks", reason: "Basic playground access" }
  ],
  water: [
    { name: "Gage Park", reason: "Splash pad + aquatic center" }
  ],
  active: [
    { name: "Lake Shawnee Park", reason: "Bike trails + long loops" }
  ],
  quiet: [
    { name: "Lake Shawnee Park", reason: "Low traffic walking paths" }
  ]
};

export default function App() {
  const [selectedMood, setSelectedMood] = useState(null);

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      {!selectedMood && (
        <div>
          <h1>How does today feel?</h1>
          {moods.map((m) => (
            <div
              key={m.id}
              onClick={() => setSelectedMood(m.id)}
              style={{
                padding: 12,
                margin: "10px 0",
                border: "1px solid #ddd",
                cursor: "pointer",
                borderRadius: 8
              }}
            >
              <b>{m.title}</b>
              <div style={{ fontSize: 12, color: "#666" }}>{m.desc}</div>
            </div>
          ))}
        </div>
      )}

      {selectedMood && (
        <div>
          <button onClick={() => setSelectedMood(null)}>← Back</button>

          <h2>Recommended Parks</h2>

          {(parks[selectedMood] || []).map((p, i) => (
            <div
              key={i}
              style={{
                padding: 12,
                margin: "10px 0",
                border: "1px solid #ddd",
                borderRadius: 8
              }}
            >
              <b>{p.name}</b>
              <div style={{ fontSize: 12 }}>{p.reason}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
