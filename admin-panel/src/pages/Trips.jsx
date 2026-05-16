const Trips = () => {
  return (
    <div className="space-y-12 pb-12">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-5xl font-black text-slate-900 tracking-tighter mb-4">
          Popular Trips & Destinations
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          აღმოაჩინე საქართველოს ულამაზესი ადგილები — ისტორია, ბუნება და სულიერება ერთად
        </p>
      </div>

      {/* Destinations Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* სათაფლია */}
        <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all border border-slate-100">
          <h3 className="text-3xl font-bold mb-3">სათაფლია</h3>
          <p className="text-slate-600 mb-6 leading-relaxed">
            დინოზავრების კვალი, ულამაზესი კარსტული მღვიმეები, მინის პანორამული აივანი და კოლხური ტყე.
          </p>
         
        </div>

        {/* გელათი */}
        <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all border border-slate-100">
         
          <h3 className="text-3xl font-bold mb-3">გელათის მონასტერი</h3>
          <p className="text-slate-600 mb-6 leading-relaxed">
            XII საუკუნის არქიტექტურული შედევრი, დავით აღმაშენებლის დაფუძნებული. UNESCO-ს მსოფლიო მემკვიდრეობა.
          </p>
        
        </div>

        {/* სიღნაღი */}
        <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all border border-slate-100">
          
          <h3 className="text-3xl font-bold mb-3">სიღნაღი</h3>
          <p className="text-slate-600 mb-6 leading-relaxed">
            სიყვარულის ქალაქი კახეთში. ულამაზესი ხედები ალაზნის ველზე, ღვინო და რომანტიკული ატმოსფერო.
          </p>
        </div>

        {/* მოწამეთა */}
        <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all border border-slate-100">

          <h3 className="text-3xl font-bold mb-3">მოწამეთას მონასტერი</h3>
          <p className="text-slate-600 mb-6 leading-relaxed">
            კლდეზე მდებარე მონასტერი მდინარე წყალცითელას ზემოთ. ერთ-ერთი ყველაზე თვალწარმტაცი და სულიერი ადგილი.
          </p>
         
        </div>

      </div>
    </div>
  );
};

export default Trips;