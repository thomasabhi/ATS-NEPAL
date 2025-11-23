// import Image from "next/image";
import parkingMapImg from "../../assets/parkingImage.png"; // place your map image in /public
import handPhoneImg from "../../assets/handPhoneImage.png";  // place your phone-in-hand image in /public

export default function AppInfo() {
  return (
    <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-800">
      
      {/* Top Left Section */}
      <section className="flex flex-col justify-center p-4">
        <h2 className="text-xl font-semibold mb-4">Discover the Smart Solution with Our App</h2>
        <p className="mb-4 text-sm leading-relaxed">
          Ever found your vehicle scratched or damaged simply because you parked in the wrong spot during a rush? You’re not alone — it’s a frequent issue in cities where authorized parking spaces are few and far between. In these situations, many people end up leaving their vehicle in front of someone’s house, shop, or in a reserved parking space without realizing the consequences.
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>Enables direct contact if your vehicle is parked improperly</li>
          <li>Prevents damage through instant communication</li>
          <li>Saves you time, money, and stress</li>
          <li>Helps you avoid fines or towing from unauthorized parking</li>
          <li>Saves time spent dealing with damage or relocating your vehicle</li>
        </ul>
      </section>

      {/* Top Right Section - Parking Map */}
      <section className="relative flex items-center justify-center bg-gray-50 rounded-md p-4">
        <img
          src={parkingMapImg}
          alt="Parking Map"
          className="rounded-md h-[600px] w-[600px] object-cover"
          
          priority
        />
        <div className="absolute top-16 right-4 bg-blue-700 text-white p-3 rounded-md max-w-xs shadow-lg">
          <p className="mb-2 font-semibold">Parking Map</p>
          <p className="mb-3 text-sm">Find nearby legal parking spots instantly.</p>
          <button className="bg-red-600 py-1 px-3 rounded text-sm font-semibold hover:bg-red-700 transition">
            OPEN MAP
          </button>
        </div>
      </section>

      {/* Bottom Left Section - Hand holding phone */}
      <section className="flex justify-center p-4">
        <img
          src={handPhoneImg}
          alt="Phone with ATS app"
          
          className="rounded-md h-[600px] w-[600px] object-cover"
          priority
        />
      </section>

      {/* Bottom Right Section */}
      <section className="flex flex-col justify-center p-4">
        <h2 className="text-xl font-semibold mb-4">ATS QR Decal Installation Made Simple</h2>
        <p className="mb-4 text-sm leading-relaxed">
          To apply your ATS QR Decal, first clean and dry the windscreen with mild soap and water—avoid ammonia cleaners. Peel off the backing carefully, then press the decal from the center outward to prevent bubbles. This decal lets others quickly contact you in emergencies. If you need help, the ATS support team is ready to assist.
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>Clean the surface with a mild soap solution (no ammonia)</li>
          <li>Let it dry completely before application</li>
          <li>Peel carefully without touching the adhesive</li>
          <li>Apply from the center outward for a smooth finish</li>
          <li>Place the decal where it’s clearly visible for quick scanning</li>
        </ul>
      </section>

    </div>
  );
}
