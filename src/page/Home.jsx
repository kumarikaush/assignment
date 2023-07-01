import Logo from "../assets/asset 9.png"
export const Home = () => {
    return (
        <main>
            <div className="md:flex flex-wrap items-center p-5">
                <div className="basis-2/4 shrink p-4">
                    <h1 className="text-green-700 text-4xl font-bold mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                    <p className="text-green-900">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste odit enim quas recusandae incidunt. Nisi atque accusamus eum eos consectetur molestias sapiente velit veniam rem, quisquam qui? Obcaecati, eligendi rem.</p>
                    <button className="mt-4 bg-green-600 hover:bg-green-900 py-2 px-4 text-white text-lg rounded-lg ">Get Started <i class="bi bi-arrow-right"></i></button>
                </div>
                <div className="basis-2/4 shrink-0 p-10">
                    <img className="md:w-96 rounded-xl" src="https://images.unsplash.com/photo-1653669487177-d7c8e245f0f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
                </div>
            </div>
            <div className="flex flex-wrap w-full justify-evenly p-10 my-10">
                <div><img src={Logo} alt="company-logo" /></div>
                <div><img src={Logo} alt="company-logo" /></div>
                <div><img src={Logo} alt="company-logo" /></div>
                <div><img src={Logo} alt="company-logo" /></div>
            </div>
        </main>
    )
}
