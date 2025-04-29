import HomeHeader from "@/components/HomeHeader";
import Advertise from "@/layouts/home/advertise/Advertise";
import Categories from "@/layouts/home/Categories";
import Sale from "@/layouts/home/Sale";
import { Layout } from 'antd';

export default function Home() {
  return (
    <Layout style={{height:'100vh', width:'100vw'}}>
      <HomeHeader/>
      <Advertise/>
      <Categories/>
      <Sale/>
    </Layout>
  )
}
