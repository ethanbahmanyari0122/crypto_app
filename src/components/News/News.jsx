import React from "react";
import  {Select, Typography, Row, Col, Avatar, Card} from "antd";
import moment from "moment";
import {useGetCryptoNewsQuery} from "../../services/cryptoNews";


const {Text, Title} = Typography;
const { Option } = Select;
const News = ({simplified}) => {
    const {data: cryptoNews} = useGetCryptoNewsQuery({ newsCategory: 'Cryptocurrency', count: simplified ? 12 : 100})
    return(
        <div>

        </div>
    )
}

export default News;