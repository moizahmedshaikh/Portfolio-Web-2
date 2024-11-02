import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Projects = () => {
  return (
    <section className="projects">
      <h2 className='section-title'>My Projects</h2>

      <div className="project-grid">

        <div className="project-card">
          <Image src={"/images/slider.png"} alt='project image' height={1000} width={1000}/>
          <h3>Slider</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quisquam eveniet dignissimos. Debitis sapiente deleniti saepee repellat.</p>
          <div className="btn-group">
            <div className="btn"><Link className='Link' href={"https://moiz-crazy-slider-effect.vercel.app/"} target='_blank'>Live Demo</Link></div>
            <div className="btn"><Link className='Link' href={"https://github.com/moizahmedshaikh/Crazy-Slider-Effect"} target='_blank'>Github Link</Link></div>
          </div>
        </div>

        <div className="project-card">
          <Image src={"/images/sundown2.png"} alt='project image' height={1000} width={1000}/>
          <h3>Sundown</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quisquam eveniet dignissimos. Debitis sapiente deleniti saepee repellat.</p>
          <div className="btn-group">
            <div className="btn"><Link className='Link' href={"https://sundown-gules.vercel.app/"} target='_blank'>Live Demo</Link></div>
            <div className="btn"><Link className='Link' href={"https://github.com/moizahmedshaikh/Sundown"} target='_blank'>Github Link</Link></div>
          </div>
        </div>


        <div className="project-card">
          <Image src={"/images/resume.png"} alt='project image' height={1000} width={1000}/>
          <h3>Resume Builder</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quisquam eveniet dignissimos. Debitis sapiente deleniti saepee repellat.</p>
          <div className="btn-group">
            <div className="btn"> <Link className='Link' href={"https://milestone5-unique-path-and-shareable-link.vercel.app/"} target='_blank'>live Demo</Link></div>

            <div className="btn" > <Link className='Link' href={"https://github.com/moizahmedshaikh/Milestone5-Unique-Path-and-Shareable-Link"} target='_blank'>Github Link</Link> </div>
          </div>
        </div>



      </div>
    </section>
  )
}

export default Projects