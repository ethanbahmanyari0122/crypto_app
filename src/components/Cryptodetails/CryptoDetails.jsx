import React, {useState} from "react";
import HTMLReactParser from "html-react-parser";
import {useParams} from "react-router-dom";
import millify from "millify";
import {Col, Row, Typography, Select} from "antd";
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltOutlined } from '@ant-design/icons';
import {useGetCryptoDetailsQuery} from "../../services/cryptoApi"

const {Title, Text} = Typography;
const {Option} = Select;
const CryptoDetails = () => {
    const [timePeriod, setTimePeriod] = useState('7d')
    const {coinId} = useParams();
    const {data, isFetching} = useGetCryptoDetailsQuery(coinId)



    return(
        <div>

        </div>
    )
}

export default CryptoDetails;