import * as S from './styles';

export function TransactionTable() {
    return (
        <S.Container>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Amount</th>
                        <th>Category</th>
                        <th>Date</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>website development</td>
                        <td>$10,000</td>
                        <td>Development</td>
                        <td>06/02/2021</td>
                    </tr>
                    <tr>
                        <td>Outcome</td>
                        <td className="withdraw">- $1,000</td>
                        <td>Rents</td>
                        <td>09/02/2021</td>
                    </tr>
                    <tr>
                        <td>website development</td>
                        <td className="deposit">$10,000</td>
                        <td>Development</td>
                        <td>06/02/2021</td>
                    </tr>
                    <tr>
                        <td>website development</td>
                        <td className="deposit">$10,000</td>
                        <td>Development</td>
                        <td>06/02/2021</td>
                    </tr>

                </tbody>
            </table>
        </S.Container>
    );
}