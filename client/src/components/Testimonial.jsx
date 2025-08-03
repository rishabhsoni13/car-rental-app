import React from 'react';
import Title from './Title'; // Make sure this path is correct
import { assets } from '../assets/assets';

const Testimonial = () => {
    const testimonials = [
        {
            id: 1,
            name: "Emma Rodriguez",
            address: "New york , USA",
            image: assets.testimonial_image_1,
    
            testimonial: "Exceptional service and attention to detail. Everything was handled professionally and efficiently from start to finish. Highly recommended!"
        },
        {
             
            name: "Amanda Alter",
            address: "Barcelona, Spain",
            image: assets.testimonial_image_2, 
            testimonial: "Car rental made my trip so much better . The Car was neat, deliverd right to my door , strongly recommended"
        },
        {
            name: "Nancy Bose",
            address: "Sydney , Australia",
            image: assets.testimonial_image_1,
    
            testimonial: "Exceptional service Everything was handled professionally and efficiently from start to finish. Highly recommended!"
},];

    return (
        <div className='py-28 px-6 md:px-16 lg:px-24 xl:px-44'>
            <Title
                title="What Our Customers Say"
                subTitle="Discover why discerning travelers choose StayVenture for their luxury accommodations around the world"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-18">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:translate-y-1 transition-all duration-500">
                        <div className="flex items-center gap-3">
                            <img
                                className="w-12 h-12 rounded-full"
                                src={testimonial.image || 'https://via.placeholder.com/48'}
                                alt={testimonial.name}
                            />
                            <div>
                                <p className=" text-xl">{testimonial.name}</p>
                                <p className="text-gray-500">{testimonial.location}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 mt-4">
                            {Array(5).fill(0).map((_, index) => (
                                <img key={index} src={assets.star_icon} alt="star_icon" />
                              
                            ))}
                        </div>
                        <p className="text-gray-500 max-w-90 mt-4">"{testimonial.testimonial}"</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonial;
