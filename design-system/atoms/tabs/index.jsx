import { useState } from 'react'
import styles from './tabs.module.css'

import TabTitle from './tab/TabTitle'

const Tabs = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState(0)

  return (
    <>
      <nav role="tablist" className={styles.container}>
        {children.map((item, index) => (
          <TabTitle
            key={index}
            title={item.props.title}
            index={index}
            setSelectedTab={setSelectedTab}
            active={selectedTab}
          />
        ))}
      </nav>
      {children[selectedTab]}
    </>
  )
}

export default Tabs
