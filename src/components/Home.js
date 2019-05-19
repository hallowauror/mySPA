import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Home extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="home-grid">
                    <Cell col={12}>
                        <img
                            src="https://cdn3.iconfinder.com/data/icons/diversity-avatars-vol-2/64/charlie-chaplan-actor-entertainer-512.png"
                            alt="chaplin"
                            className="chaplin-img"
                        />
                        <div className="banner-text">
                            <h1>Komputer & Sistem Informasi</h1>
                            <hr />
                            <p>Universitas Gadjah Mada</p>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Home;