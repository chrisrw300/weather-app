import React from 'react';
import Forecast from '../Forecast';
import Daily from '../Daily'

function Dashboard() {
    return (
        <section>
            <div class="body">
                <div class="search">
                    <input type="text" placeholder="Albuquerque, etc..." id="search-input"></input>
                    <button type="button" id="search-btn">Search</button>
                </div>
            </div>
            <Forecast />
            <Daily />
        </section>
    )
}

export default Dashboard;