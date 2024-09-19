"use client"




import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const BlogSection = () => {
    const [visibleBlogs, setVisibleBlogs] = useState(3);
    const [currentIndex, setCurrentIndex] = useState(0);

    const blogs = [
        { id: 1, title: 'The Struggle for Freedom in Palestine', date: '2023-09-01', author: 'Ahmed Ali' },
        { id: 2, title: 'Palestinian Protests: A Decade of Resistance', date: '2023-09-02', author: 'Fatima Hassan' },
        { id: 3, title: 'Genocide in Gaza: Israel’s Deadly Campaign', date: '2023-09-03', author: 'Mohammad Yusuf' },
        { id: 4, title: 'Zionist Oppression: The Silencing of Palestinian Voices', date: '2023-09-04', author: 'Hanan Saleh' },
        { id: 5, title: 'The Humanitarian Crisis in the West Bank', date: '2023-09-05', author: 'Yasmin Jaber' },
        { id: 6, title: 'Living Under Occupation: Palestinian Life in Ruins', date: '2023-09-06', author: 'Samiya Khalil' },
        { id: 7, title: 'Israel’s Siege on Gaza: The Blockade Continues', date: '2023-09-07', author: 'Nidal Ibrahim' },
        { id: 8, title: 'Zionism and Its Impact on Palestinian Heritage', date: '2023-09-08', author: 'Ali Zaid' },
        { id: 9, title: 'The Voices of Palestinian Refugees', date: '2023-09-09', author: 'Layla Kassem' },
        { id: 10, title: 'Palestine Under Attack: International Response Lags', date: '2023-09-10', author: 'Khaled Fares' },
        { id: 11, title: 'Boycott, Divestment, and Sanctions: A Movement for Justice', date: '2023-09-11', author: 'Salma Rashid' },
        { id: 12, title: 'The Zionist Agenda: Erasing Palestine', date: '2023-09-12', author: 'Omar Badr' },
        { id: 13, title: 'Palestinian Resistance: From Stones to Protests', date: '2023-09-13', author: 'Rania Nasir' },
        { id: 14, title: 'Tales of the Nakba: Remembering 1948', date: '2023-09-14', author: 'Hussein Mansour' },
        { id: 15, title: 'Children of Palestine: Growing Up in War Zones', date: '2023-09-15', author: 'Mariam Darwish' },
        { id: 16, title: 'Media Bias in Reporting on Palestine', date: '2023-09-16', author: 'Lina Taha' },
        { id: 17, title: 'The Apartheid Wall: Dividing Palestinians', date: '2023-09-17', author: 'Adnan Jamal' },
        { id: 18, title: 'Voices of Women in the Palestinian Struggle', date: '2023-09-18', author: 'Shireen Qamar' },
        { id: 19, title: 'Israel’s Violation of International Law in Palestine', date: '2023-09-19', author: 'Bilal Salem' },
        { id: 20, title: 'The Role of Social Media in Palestinian Protests', date: '2023-09-20', author: 'Yousef Nassar' },
        { id: 21, title: 'Israeli Settlements: Expanding on Stolen Land', date: '2023-09-21', author: 'Farah Ismail' },
        { id: 22, title: 'Palestinian Resistance: A Fight for Existence', date: '2023-09-22', author: 'Issa Hamad' },
        { id: 23, title: 'Cultural Resistance: Art and Poetry in Palestine', date: '2023-09-23', author: 'Nada Sufyan' },
        { id: 24, title: 'Zionist Crimes Against Humanity: Ignored by the World', date: '2023-09-24', author: 'Kareem Abbas' },
        { id: 25, title: 'Gaza Under Siege: The World’s Largest Open-Air Prison', date: '2023-09-25', author: 'Mohammed Saleh' },
        { id: 26, title: 'The Role of Youth in the Palestinian Uprising', date: '2023-09-26', author: 'Amira Zain' },
        { id: 27, title: 'Breaking the Silence: Exposing Israeli War Crimes', date: '2023-09-27', author: 'Ibrahim Fawzi' },
        { id: 28, title: 'The Right of Return: Palestinian Refugees’ Struggle', date: '2023-09-28', author: 'Nadia Ahmad' },
        { id: 29, title: 'Zionist Propaganda: Distorting the Truth About Palestine', date: '2023-09-29', author: 'Ola Shaheen' },
        { id: 30, title: 'Palestinian Solidarity Movements Across the Globe', date: '2023-09-30', author: 'Fadi Abu-Lughod' },
        { id: 31, title: 'Remembering the Massacre of Deir Yassin', date: '2023-10-01', author: 'Sarah Maher' },
        { id: 32, title: 'The Economic Siege of Palestine: A Struggle for Survival', date: '2023-10-02', author: 'Jamal Ahmad' },
        { id: 33, title: 'Human Rights Abuses in Occupied Palestine', date: '2023-10-03', author: 'Rania Qassem' },
        { id: 34, title: 'Palestinian Prisoners: Detained Without Trial', date: '2023-10-04', author: 'Salah Karim' },
        { id: 35, title: 'A Land Divided: The Fragmentation of Palestine', date: '2023-10-05', author: 'Huda Khalil' },
        { id: 36, title: 'Journalists Under Fire: The Risks of Covering Palestine', date: '2023-10-06', author: 'Zainab Azzam' },
        { id: 37, title: 'The Gaza Health Crisis: Struggling for Medical Aid', date: '2023-10-07', author: 'Mahmoud Saeed' },
        { id: 38, title: 'Palestinian Identity: Preserving Culture Amidst Occupation', date: '2023-10-08', author: 'Alaa Hijazi' },
        { id: 39, title: 'Palestine in the Eyes of the World: A Tale of Ignorance', date: '2023-10-09', author: 'Hadiya Abbas' },
        { id: 40, title: 'The Gaza Bombings: A Timeline of Tragedy', date: '2023-10-10', author: 'Omar Khaled' },
        { id: 41, title: 'The War on Palestinian Agriculture: Destroying Livelihoods', date: '2023-10-11', author: 'Zaki Mansour' },
        { id: 42, title: 'Israeli Checkpoints: The Daily Humiliation of Palestinians', date: '2023-10-12', author: 'Malak Salah' },
        { id: 43, title: 'The Role of NGOs in Supporting Palestine', date: '2023-10-13', author: 'Amani Jibril' },
        { id: 44, title: 'Silencing Dissent: Israel’s Crackdown on Palestinian Activists', date: '2023-10-14', author: 'Rashad Almasri' },
        { id: 45, title: 'Ethnic Cleansing: The Ongoing Displacement of Palestinians', date: '2023-10-15', author: 'Ibtisam Majid' }
    ]

    const handleShowMore = () => {
        setVisibleBlogs(prevVisible => prevVisible === 9 ? 3 : Math.min(prevVisible + 3, 9));
    };

    const handlePrevious = () => {
        setCurrentIndex(prevIndex => Math.max(prevIndex - 1, 0));
    };

    const handleNext = () => {
        setCurrentIndex(prevIndex => Math.min(prevIndex + 1, blogs.length - visibleBlogs));
    };

    useEffect(() => {
        setCurrentIndex(0);
    }, [visibleBlogs]);

    return (
        <section className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-extrabold text-center mb-8">Latest Blogs</h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {blogs.slice(currentIndex, currentIndex + visibleBlogs).map((blog) => (
                        <article key={blog.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                                <p className="text-gray-400 text-sm mb-4">
                                    By {blog.author} | {new Date(blog.date).toLocaleDateString()}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
                <div className="mt-8 flex justify-between items-center">
                    <button
                        onClick={handlePrevious}
                        disabled={currentIndex === 0}
                        className="bg-blue-600 text-white px-4 py-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                        aria-label="Previous blogs"
                    >
                        <FaChevronLeft className="inline-block mr-2" /> Previous
                    </button>
                    <button
                        onClick={handleShowMore}
                        className="bg-green-600 text-white px-4 py-2 rounded-md transition-colors duration-300 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                        aria-label={visibleBlogs === 9 ? "Show less blogs" : "Show more blogs"}
                    >
                        {visibleBlogs === 9 ? "Show Less" : "Show More"}
                    </button>
                    <button
                        onClick={handleNext}
                        disabled={currentIndex + visibleBlogs >= blogs.length}
                        className="bg-blue-600 text-white px-4 py-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                        aria-label="Next blogs"
                    >
                        Next <FaChevronRight className="inline-block ml-2" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default BlogSection;