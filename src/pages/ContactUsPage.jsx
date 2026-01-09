

export default function ContactUsPage() {
    return (
        <div className="pt-32 pb-16 px-8 min-h-dvh bg-gray-50">
            <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
            <p className="text-center text-gray-700 mb-4">We would love to hear from you! Please reach out with any questions or feedback.</p>
            <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
                <form className="flex flex-col gap-6">
                    <input type="text" placeholder="Your Name" className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" />
                    <input type="email" placeholder="Your Email" className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" />
                    <textarea placeholder="Your Message" rows="5" className="border border-gray-300 rounded-md px
-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
                    <button type="submit" className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition">Send Message</button>
                </form>
            </div>
        </div>
    )
}