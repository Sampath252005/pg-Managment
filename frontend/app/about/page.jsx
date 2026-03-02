"use client";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen p-6 md:p-10 overflow-hidden bg-gradient-to-br from-slate-50 to-indigo-50">

      {/* Soft background glow */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-indigo-200 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-40"></div>

      {/* Header */}
      <div className="relative mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          About Swasthishree Paying Guest
        </h1>
        <p className="text-gray-600 mt-2 max-w-2xl">
          A comfortable, secure and community-driven living space designed
          for students and working professionals in Mangalore.
        </p>
      </div>

      {/* Main Card */}
      <div className="relative backdrop-blur-xl bg-white/70 border border-white/40 shadow-xl rounded-2xl p-6 md:p-10 space-y-6">

        {/* Description */}
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            Swasthishree Paying Guest offers a peaceful and well-maintained
            living environment that prioritizes safety, comfort and convenience.
            Our goal is to provide residents with a home-like atmosphere where
            they can focus on their studies or work without worry.
          </p>

          <p>
            The facility is designed to meet the daily needs of modern residents
            with essential amenities, a supportive community and a prime location
            that provides easy access to nearby services and transportation.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 pt-4">

          <FeatureCard icon="🛏" title="Furnished Rooms" />
          <FeatureCard icon="📶" title="High-Speed WiFi" />
          <FeatureCard icon="🍽" title="Hygienic Food" />
          <FeatureCard icon="💧" title="24/7 Water Supply" />
          <FeatureCard icon="🛡" title="Secure Environment" />
          <FeatureCard icon="📍" title="Prime Location" />

        </div>

      </div>

      {/* Values Section */}
      <div className="grid md:grid-cols-3 gap-6 mt-8">

        <InfoCard
          title="Comfort First"
          desc="Clean rooms, proper maintenance and a peaceful atmosphere ensure a relaxed living experience."
        />

        <InfoCard
          title="Safe Living"
          desc="Security and well-managed facilities provide residents with confidence and peace of mind."
        />

        <InfoCard
          title="Community Feel"
          desc="A friendly environment where residents feel welcomed and supported every day."
        />

      </div>

    </div>
  );
}

/* ---------- Reusable Components ---------- */

function FeatureCard({ icon, title }) {
  return (
    <div className="flex items-center gap-3 p-4 rounded-xl bg-white/60 border border-white/40 shadow-sm">
      <span className="text-xl">{icon}</span>
      <span className="font-medium text-gray-800">{title}</span>
    </div>
  );
}

function InfoCard({ title, desc }) {
  return (
    <div className="backdrop-blur-xl bg-white/70 border border-white/40 shadow-lg rounded-2xl p-6">
      <h3 className="font-semibold text-lg text-gray-800">{title}</h3>
      <p className="text-gray-600 mt-2 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}