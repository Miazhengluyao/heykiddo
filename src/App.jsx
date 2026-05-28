import { useState } from "react";

const moods = [
  { id: "burn", title: "👶 Toddler Energy Burn", desc: "Let them run it out", color: "from-orange-100 to-orange-50" },
  { id: "calm", title: "🌳 Calm Nature Walk", desc: "Slow pace, low stimulation", color: "from-green-100 to-emerald-50" },
  { id: "play", title: "🛝 Playground Adventure", desc: "Classic playground fun", color: "from-yellow-100 to-amber-50" },
  { id: "picnic", title: "🧺 Picnic & Chill", desc: "Eat, relax, roam", color: "from-blue-100 to-sky-50" },
  { id: "water", title: "💦 Water Play Day", desc: "Splash & sensory fun", color: "from-cyan-100 to-cyan-50" },
  { id: "active", title: "🚲 Active / Sports Day", desc: "Run, bike, move", color: "from-red-100 to-rose-50" },
  { id: "quiet", title: "🌙 Quiet Walk", desc: "Wind-down stroll", color: "from-purple-100 to-violet-50" }
];

const parks = {
  burn: [
    { name: "Gage Park", reason: "Big playground + zoo + train + open play space" },
    { name: "Garfield Park", reason: "Simple playground setup for quick energy burn" }
  ],
  calm: [
    { name: "Lake Shawnee Park", reason: "Lake views and calming walking trails" },
    { name: "Gage Rose Garden", reason: "Quiet nature pocket inside Gage Park" }
  ],
  picnic: [
    { name: "Gage Park", reason: "Shady picnic areas and open lawns" },
    { name: "Lake Shawnee Park", reason: "Waterfront picnic atmosphere" }
  ],
  play: [
    { name: "Gage Park", reason: "Carousel, playground, zoo, and adventure zones" }
  ],
  water: [
    { name: "Gage Park", reason: "Splash pad and aquatic center access" }
  ],
  active: [
    { name: "Lake Shawnee Park", reason: "Bike trails and long active loops" }
  ],
  quiet: [
    { name: "Lake Shawnee Park", reason: "Low-stimulation walking environment" }
  ]
};

const moodDescriptions = {
  burn: "Your toddler likely needs movement, climbing, and room to run.",
  calm: "Today may call for slower pacing and lower stimulation.",
  play: "A fun, adventurous day with playground energy.",
  picnic: "A softer outing with snacks, rest, and casual exploration.",
  water: "Sensory play and cooling off outdoors.",
  active: "Movement-focused outdoor adventures.",
  quiet: "Gentle walks and calming evening energy."
};

export default function App() {
  const [selectedMood, setSelectedMood] = useState(null);

  const selectedMoodData = moods.find((m) => m.id === selectedMood);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F8FAFC] via-[#EEF2FF] to-[#F8FAFC] font-sans">

      <div className="max-w-md mx-auto px-5 pt-10 pb-24">

        {!selectedMood && (
          <>
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-100 shadow-sm mb-5">
                <span>☀️</span>
                <span className="text-sm text-gray-500">
                  Mood-based outing assistant
                </span>
              </div>

              <h1 className="text-5xl font-bold tracking-tight text-gray-900">
                HeyKiddo
              </h1>

              <p className="text-gray-500 mt-4 leading-relaxed max-w-xs mx-auto">
                Helping parents decide where to go based on how the day feels.
              </p>
            </div>

            <div className="space-y-4">
              {moods.map((m) => (
                <button
                  key={m.id}
                  onClick={() => setSelectedMood(m.id)}
                  className={`w-full p-5 rounded-[30px] bg-gradient-to-br ${m.color} shadow-sm border border-white/60 text-left transition-all duration-200 active:scale-[0.98] hover:shadow-lg`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xl font-semibold text-gray-800">
                        {m.title}
                      </div>

                      <div className="text-sm text-gray-600 mt-2 leading-relaxed">
                        {m.desc}
                      </div>
                    </div>

                    <span className="text-gray-400 text-xl">→</span>
                  </div>
                </button>
              ))}
            </div>
          </>
        )}

        {selectedMood && (
          <>
            <button
              onClick={() => setSelectedMood(null)}
              className="text-sm text-gray-500 mb-5"
            >
              ← Change mood
            </button>

            <div className="bg-white rounded-[30px] p-6 shadow-sm border border-gray-100 mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-sm text-gray-600 mb-4">
                {selectedMoodData?.title}
              </div>

              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Recommended Parks
              </h2>

              <p className="text-gray-500 mt-3 leading-relaxed">
                {moodDescriptions[selectedMood]}
              </p>
            </div>

            <div className="space-y-5">
              {(parks[selectedMood] || []).map((p, i) => (
                <div
                  key={i}
                  className="bg-white rounded-[30px] overflow-hidden shadow-sm border border-gray-100"
                >

                  <div className="h-44 bg-gradient-to-br from-blue-100 via-green-100 to-cyan-100 relative p-5 flex items-end overflow-hidden">
                    <div className="absolute right-4 top-4 text-7xl opacity-20">
                      🌳
                    </div>

                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 backdrop-blur text-xs text-gray-600 mb-3">
                        <span>📍</span>
                        Topeka, Kansas
                      </div>

                      <h3 className="text-2xl font-bold text-gray-900">
                        {p.name}
                      </h3>
                    </div>
                  </div>

                  <div className="p-5">
                    <p className="text-gray-500 leading-relaxed">
                      {p.reason}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-5">
                      <div className="px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs">
                        🛝 Playground
                      </div>

                      <div className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs">
                        🌳 Nature
                      </div>

                      <div className="px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 text-xs">
                        💦 Water Play
                      </div>
                    </div>

                    <div className="flex gap-3 mt-6">
                      <button className="flex-1 py-3 rounded-2xl bg-gray-900 text-white font-medium text-sm shadow-sm">
                        Open Map
                      </button>

                      <button className="flex-1 py-3 rounded-2xl bg-gray-100 text-gray-700 font-medium text-sm">
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
