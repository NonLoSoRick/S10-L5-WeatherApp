import React, { useEffect, useState } from 'react';
import { Carousel, Row, Col } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';


const HourlyWeather = ({ city, language }) => {
    const [hourlyData, setHourlyData] = useState(null);

    useEffect(() => {
        const fetchHourlyData = async () => {
            const apiKey = '52e68594b8eb3359f288cd921f6e2a8e';

            try {
                const response = await fetch(
                    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=${language}&appid=${apiKey}`
                );

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setHourlyData(data.list);
            } catch (error) {
                console.error(error);
            }
        };

        fetchHourlyData();
    }, [city, language]);

    const convertKelvinToCelsius = (kelvin) => {
        return (kelvin - 273.15).toFixed(2);
    };

    const groupDataByThree = (data) => {
        const grouped = [];
        for (let i = 0; i < data.length; i += 5) {
            grouped.push(data.slice(i, i + 5));
        }
        return grouped;
    };

    return (
        <div className='mt-5'>
            {hourlyData && (
                <Carousel>
                    {groupDataByThree(hourlyData).map((group, index) => (
                        <Carousel.Item key={index}>
                            <Row>
                                {group.map((hour) => (
                                    <Col key={hour.dt}>
                                        <p className='fs-4'><i className="bi bi-clock me-2"></i>
                                            {new Date(hour.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                        </p>
                                        <p className='fs-4'> <i className="bi bi-thermometer-half me-2"></i> {convertKelvinToCelsius(hour.main.temp)}°C</p>
                                        <img
                                            src={`https://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`}
                                            alt="Weather Icon"
                                        />

                                    </Col>
                                ))}
                            </Row>
                        </Carousel.Item>
                    ))}
                </Carousel>
            )}
        </div>
    );
};

export default HourlyWeather;
