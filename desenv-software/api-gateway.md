# API Gateway

Um API Gateway (AG) é um servidor que atua como um único ponto de entrada para um conjunto de microsserviços.O AG recebe as solicitações do cliente, as encaminha para o microsserviço apropriado e, em seguida, retorna a resposta do servidor ao cliente.

O AG é responsável por tarefas como roteamento, autenticação e limitação de taxa. Isso permite que os microsserviços se concentrem em suas tarefas individuais e melhorem o desempenho geral e a escalabilidade do sistema.

## Principais usos do AG:

𝗥𝗼𝘂𝘁𝗶𝗻𝗴: O AG recebe solicitações de clientes e as encaminha para o microsserviço apropriado. Isso permite que os clientes acessem os vários microsserviços por meio de um único ponto de entrada, simplificando o design geral do sistema.

𝗦𝗲𝗰𝘂𝗿𝗶𝘁𝘆: O AG pode ser usado para autenticar clientes e aplicar políticas de controle de acesso para os microsserviços. Isso ajuda a garantir que apenas clientes autorizados possam acessar os microsserviços e ajuda a evitar o acesso não autorizado.

𝐓𝐫𝐚𝐧𝐬𝐟𝐨𝐫𝐦𝗶𝗻𝗴 𝐫𝐞𝐪𝐮𝐞𝐬𝐭𝐬 𝐚𝐧𝐝 𝐫𝐞𝐬𝐩𝐨𝐧𝐬𝐞𝐬: AG pode transformar solicitações de entrada e respostas de saída para e para o back -end para atender às necessidades de diferentes clientes ou cumprir diferentes arquiteturas de back -end.

𝗥𝗮𝘁𝗲 𝗹𝗶𝗺𝗶𝘁𝗶𝗻𝗴: Você pode limitar o acesso do cliente a microsserviços com um AG. Isso pode ajudar a evitar ataques de negação de serviço e outros tipos de comportamento mal-intencionado.

𝗟𝗼𝗮𝗱 𝗯𝗮𝗹𝗮𝗻𝗰𝗶𝗻𝗴: O AG pode distribuir solicitações recebidas entre várias instâncias de um microsserviço, permitindo que o sistema lide com um número maior de solicitações e melhorando seu desempenho geral e escalabilidade.

𝗖𝗮𝗰𝗵𝗶𝗻𝗴: O AG pode armazenar em cache as respostas dos microsserviços, reduzindo o número de solicitações que precisam ser encaminhadas aos microsserviços e melhorando o desempenho geral do sistema.

𝗦𝗲𝗿𝘃𝗲𝗿𝗹𝗲𝘀𝘀 𝗲𝘅𝗲𝗰𝘂𝘁𝗶𝗼𝗻: AG pode se integrar a outros serviços, como AWS Lambda, para habilitar arquiteturas sem servidor e possibilitar o processamento complexo de solicitações sem a necessidade de um servidor dedicado.

𝗖𝗶𝗿𝗰𝘂𝗶𝘁 𝗯𝗿𝗲𝗮𝗸𝗲𝗿: AG pode ser usado para implementar padrões de disjuntores, o que pode ajudar a proteger contra falhas em cascata e melhorar a resiliência do seu sistema.

𝗥𝗲𝘃𝗲𝗿𝘀𝗲 𝗽𝗿𝗼𝘅𝘆: o AG pode atuar como um proxy reverso, roteando as solicitações recebidas para o serviço de back-end apropriado com base no caminho da solicitação ou em outros critérios.

𝗔𝗣𝗜 𝘃𝗲𝗿𝘀𝗶𝗼𝗻𝗶𝗻𝗴: AG pode ser usado para implementar versionamento de API, permitindo manter várias versões de uma API e gerenciar a transição de uma versão para outra.

![image](https://user-images.githubusercontent.com/24658433/226021584-8983b961-ca3c-4ee0-93c9-26f98c1ded40.png)
