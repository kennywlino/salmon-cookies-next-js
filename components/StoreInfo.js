import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })


// change this so that it takes the following in as props to reuse:
// - city name
// - hours open
// - contact info
// - location

export default function StoreInfo() {
  return <div>
      <ul className={inter.className}>
        <ul id="seattle">
          <h2>Seattle</h2>
          <li>Hours Open : 6am - 7pm</li>
          <li>Contact Info : 123-456-7890</li>
          <li>Location : 2901 3rd Ave #300, Seattle, WA 98121</li>
        </ul>
        <ul id="tokyo">
          <h2>Tokyo</h2>
          <li>Hours Open : 6am - 7pm</li>
          <li>Contact Info : 222-222-2222</li>
          <li>Location : 1 Chome-1-2 Oshiage, Sumida City, Tokyo 131-8634</li>
        </ul>
        <ul id="dubai">
          <h2>Dubai</h2>
          <li>Hours Open : 6am - 7pm</li>
          <li>Contact Info : 333-333-3333</li>
          <li>Location : 1 Sheikh Mohammed bin Rashid Blvd - Dubai</li>
        </ul>
        <ul id="paris">
          <h2>Paris</h2>
          <li>Hours Open : 6am - 7pm</li>
          <li>Contact Info : 444-444-4444</li>
          <li>Location : Champ de Mars, 5 Avenue Anatole France, 75007 Paris</li>
        </ul>
        <ul id="lima">
          <h2>Lima</h2>
          <li>Hours Open : 6am - 7pm</li>
          <li>Contact Info : 555-555-5555</li>
          <li>Location : Ca. Gral. Borgoño cuadra 8, Miraflores 15074</li>
        </ul>
      </ul>
    </div>;
}