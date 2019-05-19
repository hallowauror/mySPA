import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardMenu, IconButton } from 'react-mdl';

class Portofolio extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid">
                    {/* Project 1 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://i.ibb.co/yfnXqJv/proyek.jpg) center / cover' }}>PsycologySays</CardTitle>
                        <CardText>
                            Aplikasi konsultasi psikologi online berbasis web.
                    </CardText>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* Project 2 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: 'black', height: '176px', background: 'url(data:image/png;base64,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) center / cover' }}>BacaKomik</CardTitle>
                        <CardText>
                            Aplikasi baca komik berbasis mobile apps.
                    </CardText>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* Project 3 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: 'black', height: '176px', background: 'url(data:image/png;base64,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) center / cover' }}>Prekcu</CardTitle>
                        <CardText>
                            Aplikasi prediksi cuaca berbasis mobile apps.
                    </CardText>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>My Portofolio</Tab>
                </Tabs>

                <Grid>
                    <Cell col={12}>
                        <div className="context">{this.toggleCategories()} </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Portofolio;