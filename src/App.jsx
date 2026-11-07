import { useState } from 'react'
import spoonsImage from './assets/spoons.jpg'
import noodlesImage from './assets/noodles.jpg'
import yellowDishImage from './assets/yellow-dish.jpg'
import thaliImage from './assets/thali.jpg'
import './App.css'

const navLinks = [
  { label: 'Welcome', href: '#welcome' },
  { label: 'Menu', href: '#menu' },
  { label: 'Events', href: '#events' },
  { label: 'Contact', href: '#contact' },
]

const features = [
  {
    dots: 1,
    title: 'Ground in-house',
    text: 'Whole spices are roasted and stone-ground each morning before the kitchen opens.',
  },
  {
    dots: 2,
    title: 'Family recipes',
    text: 'Three generations of home cooking, measured by hand and never by machine.',
  },
  {
    dots: 3,
    title: 'Slow cooking',
    text: 'Curries simmer for hours so every layer of flavour settles and deepens.',
  },
]

const menuItems = [
  {
    name: 'Masala dosa',
    note: 'Crisp rice crepe with spiced potato and coconut chutney.',
    price: '₹250',
    image: thaliImage,
    position: '50% 45%',
  },
  {
    name: 'Chick of the day',
    note: 'Slow-roasted chicken with tomato, ginger and garam masala.',
    price: '₹280',
    image: yellowDishImage,
    position: '65% 50%',
  },
  {
    name: 'Plain vermicelli',
    note: 'Toasted vermicelli tossed with curry leaf and mustard seed.',
    price: '₹190',
    image: noodlesImage,
    position: '45% 40%',
  },
  {
    name: 'Vegetable curry',
    note: 'Seasonal vegetables simmered in coconut and green chilli.',
    price: '₹240',
    image: yellowDishImage,
    position: '30% 70%',
  },
  {
    name: 'Chicken curry',
    note: 'Country chicken in a deep, pepper-forward masala.',
    price: '₹320',
    image: yellowDishImage,
    position: '50% 30%',
  },
  {
    name: 'Vegetable cutlets',
    note: 'Spiced vegetable patties with mint chutney on the side.',
    price: '₹180',
    image: thaliImage,
    position: '30% 75%',
  },
]

function App() {
  const [sent, setSent] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSent(true)
    event.target.reset()
  }

  return (
    <>
      <header className="top">
        <nav className="nav">
          <div className="shell nav-inner">
            <a className="brand" href="#welcome">Brunch</a>
            <ul className="nav-links">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <div className="hero" id="welcome">
          <div className="shell">
            <div className="hero-card">
              <span className="script">Brunch</span>
              <h1>Full website</h1>
              <a className="read-more" href="#menu">Read more</a>
              <span className="ring ring-a" aria-hidden="true" />
              <span className="ring ring-b" aria-hidden="true" />
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="flavour">
          <div className="shell flavour-inner">
            <div className="flavour-copy">
              <h2>Indian traditional flavours</h2>
              <p>
                Curry leaves in hot ghee, whole spices toasted until fragrant and
                everything allowed to take its time. Our kitchen still cooks the
                way our grandmother&apos;s did, with what the market brings each morning.
              </p>
            </div>
            <img
              className="flavour-photo"
              src={spoonsImage}
              alt="Two wooden spoons holding peppercorns and chilli powder"
            />
          </div>
        </section>

        <section className="features" id="events">
          <div className="shell features-grid">
            {features.map((feature) => (
              <article key={feature.title}>
                <span className="dots" aria-hidden="true">
                  {Array.from({ length: feature.dots }, (_, index) => (
                    <span key={index} />
                  ))}
                </span>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="plate">
          <div className="shell">
            <div className="plate-panel">
              <header className="plate-head">
                <span className="script">India</span>
                <h2>On your plate</h2>
              </header>

              <div className="plate-grid">
                <img src={noodlesImage} alt="A dark bowl of spiced noodles" />
                <div className="plate-note">
                  <h3>Menu category</h3>
                  <p>Small plates, thalis and slow-cooked curries, served from noon until late.</p>
                  <a href="#menu">Details</a>
                </div>
                <img src={yellowDishImage} alt="A golden bowl of curry with fresh herbs" />
                <div className="plate-note">
                  <h3>Drink category</h3>
                  <p>House lassis, masala chai and infusions built around whole spice.</p>
                  <a href="#menu">Details</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="strip">
          <div className="shell strip-inner">
            <h2>Traditional cuisines made easy</h2>
            <p>
              A short menu of familiar dishes, cooked with whole spices and served
              without ceremony. Come for lunch, stay for chai.
            </p>
            <span className="dots" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            <nav className="strip-links">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href}>{link.label}</a>
              ))}
            </nav>
          </div>
        </section>

        <section className="menu" id="menu">
          <div className="menu-panel">
            <div className="shell">
              <header className="menu-head">
                <span className="script">Discover</span>
                <h2>Our new menu</h2>
              </header>

              <ul className="menu-grid">
                {menuItems.map((dish) => (
                  <li key={dish.name}>
                    <span className="menu-thumb">
                      <img src={dish.image} alt="" style={{ objectPosition: dish.position }} />
                    </span>
                    <span className="menu-copy">
                      <span className="menu-name">{dish.name}</span>
                      <span className="menu-note">{dish.note}</span>
                      <span className="menu-price">{dish.price}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="booking" id="book">
          <div className="shell">
            <span className="script booking-script">Book here</span>

            <form className="booking-form" onSubmit={handleSubmit}>
              <label className="field">
                <span>Your name (required)</span>
                <input name="name" type="text" autoComplete="name" placeholder="Your name" required />
              </label>
              <label className="field">
                <span>Where</span>
                <select name="place" defaultValue="" required>
                  <option value="" disabled>Select your location</option>
                  <option>Lavelle Road</option>
                  <option>Indiranagar</option>
                  <option>Whitefield</option>
                  <option>Koramangala</option>
                </select>
              </label>
              <label className="field">
                <span>Time</span>
                <select name="time" defaultValue="" required>
                  <option value="" disabled>Select a time</option>
                  <option>12:30</option>
                  <option>13:00</option>
                  <option>19:00</option>
                  <option>19:30</option>
                  <option>20:00</option>
                  <option>20:30</option>
                </select>
              </label>
              <label className="field">
                <span>Contact no.</span>
                <input name="phone" type="tel" autoComplete="tel" placeholder="Your number" />
              </label>
              <label className="field">
                <span>Email</span>
                <input name="email" type="email" autoComplete="email" placeholder="Your email address" required />
              </label>
              <label className="field">
                <span>How many</span>
                <select name="guests" defaultValue="2">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((count) => (
                    <option key={count} value={count}>
                      {count} {count === 1 ? 'guest' : 'guests'}
                    </option>
                  ))}
                </select>
              </label>

              <div className="booking-actions">
                <button type="submit">Submit</button>
                {sent && (
                  <p className="booking-status" role="status">
                    Thank you — we will confirm your booking by email shortly.
                  </p>
                )}
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer" id="contact">
        <div className="shell footer-inner">
          <span className="script">Brunch</span>
          <p>14 Lavelle Road, Bengaluru · hello@brunch.example · +91 80 4123 8890</p>
          <p className="copyright">© {new Date().getFullYear()} Brunch Kitchen</p>
        </div>
      </footer>
    </>
  )
}

export default App
