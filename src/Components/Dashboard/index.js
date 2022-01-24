import React from 'react';

function Dashboard() {
    return (
        <section>
            <div class="search">
                <input type="text" placeholder="Albuquerque, etc..." id="search-input"></input>
                <button type="button" id="search-btn">Search</button>
            </div>
        </section>
    )
}

export default Dashboard;