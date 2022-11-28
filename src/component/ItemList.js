import Image from 'next/image';
import Link from 'next/link';
import { Grid } from 'semantic-ui-react';
import styles from './ItemList.module.css';

export default function ItemList({ list }) {
  return (
    <div>
      <Grid columns={3}>
        <Grid.Row>
          {list.map((item) => (
            <Grid.Column key={item.id}>
              <Link href={`/view/${item.id}`}>
                <div className={styles.wrap}>
                  <Image
                    src={item.image_link}
                    alt={item.name}
                    width={100}
                    height={100}
                  />
                  <strong className={styles.tit_item}>{item.name}</strong>
                  <span className={styles.txt_info}>
                    {item.category} {item.product_type}
                  </span>
                  <strong className={styles.num_price}>${item.price}</strong>
                </div>
              </Link>
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </div>
  );
}
