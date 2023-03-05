import { motion } from 'framer-motion';

export default function ItemList({ list }){
    return(
        <ul id="work_list" className="work_list">
            {list.map((item) => (
            <motion.li key={item.id}
            animate={{ opacity: 1, top: 0}}
            initial={{ opacity: 0, top: 50}}
            transition={{ duration: 0.3 }}
            >
                <a>
                    <span className="thum"
                        style={{
                            backgroundImage: `url(${item.image})`
                        }}
                    ></span>
                    <div className="cnt">
                        <div className="cate">{item.cate}</div>
                        <span className="subject">{item.name}</span>
                    </div>
                    <div className="dt">
                        <p>{item.message}</p>
                        <span><strong>Client.</strong>{item.client}</span>
                    </div>
                </a>
            </motion.li>
            ))}
        </ul>
    )
}