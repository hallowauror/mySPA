import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './Education';
import Skills from './Skills'


class Profile extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{ textAlign: 'center' }}>
                            <img
                                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                                alt="avatar"
                                style={{ height: '200px' }}
                            />
                        </div>

                        <h2 style={{ paddingTop: '2em' }}>Ega Arya Pradipta</h2>
                        <h4 style={{ color: 'grey' }}>Mahasiswa</h4>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <p>Hanya mahasiswa biasa</p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <h5>Address</h5>
                        <p>Terban, Yogyakarta</p>
                        <h5>Phone</h5>
                        <p>(021)3456789</p>
                        <h5>Email</h5>
                        <p>egaarya99@mail.ugm.ac.id</p>
                        <h5>Github</h5>
                        <p>hallowauror</p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                    </Cell>
                    <Cell className="profile-right-col" col={8}>
                        <h2>Education</h2>
                        <Education
                            startYear={2017}
                            endYear={"Now"}
                            schoolName="Universitas Gadjah Mada"
                            schoolDescription="D3 Komputer dan Sistem Infromasi"
                        />

                        <Education
                            startYear={2014}
                            endYear={2017}
                            schoolName="SMAN 2 Tambun Selatan"
                            schoolDescription="IPA"
                        />

                        <Education
                            startYear={2011}
                            endYear={2014}
                            schoolName="SMPN 12 Tambun Selatan"
                        />

                        <Education
                            startYear={2005}
                            endYear={2011}
                            schoolName="SD Trisula PERWARI 1 Salemba"
                        />

                        <hr style={{ borderTop: '3px solid #e22947' }} />

                        <h2>Skill</h2>
                        <Skills
                            skill="Javascript"
                            progress={75}
                        />

                        <Skills
                            skill="HTML/CSS"
                            progress={90}
                        />

                        <Skills
                            skill="React"
                            progress={70}
                        />

                        <Skills
                            skill="Android Studio"
                            progress={85}
                        />

                        <Skills
                            skill="C++"
                            progress={80}
                        />

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Profile;