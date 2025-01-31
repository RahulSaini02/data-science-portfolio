import React from 'react'
import Image from 'next/image';

import { FaArrowRight } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa6";

const ProjectBlog = () => {

    const tableOfContents = [
      {
        id: 1,
        heading: 'Introduction'
      },
      {
        id: 2,
        heading: 'The Objective'
      },
      {
        id: 3,
        heading: 'Data Preparation: Setting the Foundation'
      },
      {
        id: 4,
        heading: 'Prediction Models'
      },
      {
        id: 5,
        heading: 'Portfolio-Level Insights'
      },
      {
        id: 6,
        heading: 'Results'
      },
      {
        id: 7,
        heading: 'References'
      },
    ]

    return (

      <section className='pb-28 p-4 px-6 md:max-w-7xl mx-auto space-y-2 bg-white min-h-screen text-black '>
        {/* Project Header */}
        <div className='space-y-4 my-4 lg:my-12'>
          <h3 className='text-xl md:text-3xl lg:text-5xl font-bold tracking-wide'>Building a Movie Recommendation System Using SVD</h3>
          <p className='text-gray-600 text-base md:text-lg lg:text-xl py-2'>A movie recommendation system A movie recommendation system that gives users personalized movie suggestions based on their tastes. It’s designed to help users navigate massive movie collections, which can be overwhelming to explore manually.</p>
        </div>
        {/* Project Image */}
        <div className='relative min-h-72 md:min-h-64 lg:min-h-[30rem] w-full'>
          <Image className='object-contain'
            src='/ProjectImages/1.png'
            fill
            alt='Project Image'
          />
        </div>
        {/* Author & Publish Details */}
        <div className='flex items-center justify-between w-full py-2 lg:py-8'>
          {/* Author Details */}
            <div className='flex items-center space-x-2'>
              <Image
                src='/Portrait.jpg'
                alt='Rahul Saini'
                height={40}
                width={40}
                className='rounded-full'
              />
              <div className='w-56 font-bold'>
                <p>Rahul Saini</p>
              </div>
            </div>

          {/* Publish Details */}
          <div className='text-sm md:text-base'>
            <p>Published On</p>
            <p>{new Date().toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric"
            })}</p>
          </div>
          
        </div>
        
        <article className='flex flex-col md:flex-row space-between gap-10 lg:gap-20'>
          {/* Table of Contents */}
          <div className='space-y-4 my-8 md:w-1/3'>
            {
              tableOfContents.map(content => (
                  <div key={content.id} className='flex items-center justify-between border-spacing-4 pb-3 border-b border-gray-400'>
                    <h3 className='font-bold text-sm'>{content.heading}</h3>
                    <div className='flex'>
                      <FaArrowRight className='hidden md:inline' />
                      <FaArrowDown className='inline md:hidden' />
                    </div>
                  </div>
              ))
            }
          </div>

          {/* Content */}
          <div className='space-y-4 md:w-2/3 text-justify'>
            <h3 className='font-bold text-lg tracking-widest uppercase text-left'>Introduction</h3>

            <p className='text-gray-700 text-base'>In the dynamic world of financial markets, predicting stock prices is both an art and a science. With the volatility of assets like Apple (AAPL), Tesla (TSLA), and Google (GOOGL), leveraging advanced machine learning models can transform how investors manage portfolios. Our Portfolio Prediction Model employs Long Short-Term Memory (LSTM) networks and Random Forest regressors to forecast stock trends and evaluate portfolio performance. This blog delves into the techniques, results, and future potential of this innovative system.</p>

            <h3 className='font-bold text-lg tracking-widest uppercase text-left'>The Objective</h3>

            <p className='text-gray-700 text-base'>The project aimed to achieve two core goals:</p>

            <ol className='text-gray-700 text-base'>
              <li>1. Stock Price Prediction: Using historical data to forecast next-day stock prices.</li>
              <li>2. Portfolio Performance Analysis: Evaluating financial outcomes based on predicted prices.</li>
            </ol>  
            
            <p className='text-gray-700 text-base'>By integrating LSTM networks, which excel at sequential data modeling, the system captures temporal patterns in stock movements to provide actionable insights.</p>

            <h3 className='font-bold text-lg tracking-widest uppercase text-left'>Data Preparation: Setting the Foundation</h3>


            <p>Data preprocessing is crucial for accurate predictions. Here’s how we tackled the challenges:</p>

            <ol className='text-gray-700 text-base'>
              <li>1. Data Collection: Historical stock prices were sourced via the yfinance library.</li>
              <li>2. Handling Missing Data: Missing values were forward-filled to ensure data continuity.</li>
              <li>3. Feature Selection: Features like Open, High, Low, and Close were analyzed, with a heatmap revealing strong correlations. The Close price became the focal point.</li>
              <li>4. Temporal Transformation: A sliding window approach was applied, using the last 60 days of data to predict the next day’s price.</li>
            </ol>  

            <h4 className='font-semibold text-lg'>1. Random Forest Regressor:</h4>
            <p className='text-gray-700 text-base'>Known for handling non-linear trends and outliers, Random Forest builds multiple decision trees and averages their results. While stable, its predictive accuracy lagged behind in time-series contexts.</p>

            <ul className='text-gray-700 text-base'>
              <li>MAE: 18.22</li>
              <li>MSE: 735.97</li>
              <li>RMSE: 27.12</li>
            </ul>

            
            <h4 className='font-semibold text-lg'>2. LSTM Networks:</h4>
            
            <p className='text-gray-700 text-base'>Designed for sequential data, LSTMs excel at capturing dependencies in stock price trends. With forget and input gates, they adapt to market fluctuations effectively.</p>

            <ul className='text-gray-700 text-base'>
              <li>MAE: 5.07</li>
              <li>MSE: 39.14</li>
              <li>RMSE: 6.30</li>
            </ul>

            <p className='text-gray-700 text-base'>Result: LSTM outperformed Random Forest, making it the model of choice for portfolio predictions.</p>
          </div>
        </article>
      </section>        
    )
}

export default ProjectBlog