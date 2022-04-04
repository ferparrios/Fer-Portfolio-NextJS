import { Layout, ProjectsCard } from '@components/index'
import { mobileProjectsData } from 'banners-data'
import React from 'react'

const MobileProjects = () => {
  return (
    // <Layout>
      <>
        {
        mobileProjectsData.map((i, index) => (
          <ProjectsCard 
            description={i.description}
            githubLink={i.githubLink}
            image={i.image}
            productionLink={i.productionLink}
            tecnologies={i.tecnologies}
            title={i.title}
            key={index}
          />
        ))
      }
      </>
    // </Layout>
  )
}

export default MobileProjects