export const Contact = () => {
    return (
        <main>
            <div className="my-10">
                <h1 className="text-center md:text-2xl text-xl font-bold">Contact Us</h1>

                <form className="border-2 md:p-10 p-5 rounded-md my-10">

                    <div className="py-5">
                        <label className="md:text-lg text-base font-semibold" htmlFor="name">Name</label>
                        <div>
                            <input className=" border rounded outline-none p-1" type="text" name="name" id="name" />
                        </div>
                    </div>


                    <div className="py-5">
                        <label className="md:text-lg text-base font-semibold" htmlFor="email">Email</label>
                        <div>
                            <input className=" border rounded outline-none p-1" type="email" name="email" id="email" />
                        </div>
                    </div>


                    <div className="py-5">
                        <label className="md:text-lg text-base font-semibold" htmlFor="phone">Phone</label>
                        <div>
                            <input className=" border rounded outline-none p-1" type="number" name="number" id="number" maxLength={10} minLength={10} />
                        </div>
                    </div>

                    <div className="py-5">
                        <label className="md:text-lg text-base font-semibold" htmlFor="message">Message</label>
                        <div>
                            <textarea className=" border rounded outline-none p-1 w-full" name="msg" id="msg" rows="5"></textarea>
                        </div>
                    </div>

                    <div className="text-center">
                        <button className="bg-indigo-700 text-slate-200 md:text-lg text-base p-2 px-4 rounded-lg hover:bg-indigo-900">Submit</button>
                    </div>

                    <div className="flex flex-wrap gap-4 text-xl text-blue-600 justify-center mt-10">
                        <a href="https://www.facebook.com/">
                            <i className="bi bi-facebook"></i>
                        </a>
                        <a href="https://twitter.com/">
                            <i className="bi bi-twitter"></i>
                        </a>
                        <a href="https://www.linkedin.com/">
                            <i className="bi bi-linkedin"></i>
                        </a>
                        <a href="https://web.telegram.org/">
                            <i className="bi bi-telegram"></i>
                        </a>
                        <a href="https://www.instagram.com/">
                            <i className="bi bi-instagram"></i>
                        </a>
                    </div>

                </form>
            </div>
        </main>
    )
}
