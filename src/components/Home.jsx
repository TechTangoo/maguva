import heroImage from "../assets/heroimage.png";

export default function Home() {
  return (
    <div id="home" className="flex flex-col flex-1 w-screen">
      <div className="">
        <div
          style={{
            background: `url(${heroImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center", // Center the background image
            display: "flex",
            flex: 1,
            minHeight: "600px", // You can adjust this value based on your design
            alignItems: "center",
            backgroundColor:'white'
          }}
          className="w-screen bg-opacity-0"
        >
          <div className="flex flex-1 justify-center flex-col z-20">
            <p
              className="text-5xl lg:text-7xl text-amber-200 text-center"
              style={{ fontFamily: "Nunito, sans-serif", fontWeight: 1000 }}
            >
              Maguva Healthy Foods<sup className="text-xl">®</sup>
            </p>
            <p
              className="text-xl lg:text-2xl text-amber-200 text-center"
              style={{ fontFamily: "Nunito, sans-serif", fontWeight: 600 }}
            >
              Homemade masala powders
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
