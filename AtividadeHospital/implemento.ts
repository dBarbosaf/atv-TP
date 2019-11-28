///<reference path="paciente.ts"/>
///<reference path="enfermeiro.ts"/>
///<reference path="medico.ts"/>
///<reference path='hospital.ts'/>

namespace hospital{

    let hospital = new Hospital();
    hospital.setNome("Santa Marcelina Itaquera");

    let paciente = new Paciente();
    paciente.setNome("Gustavo");
    paciente.setCpf("123.456.789-10")
    paciente.setcodPaciente(5);

    let paciente2 = new Paciente();
    paciente2.setNome("Victoria");
    paciente2.setCpf("109.876.543-21")
    paciente2.setcodPaciente(7);

    let paciente3 = new Paciente();
    paciente3.setNome("Bruno");
    paciente3.setCpf("333.666.333-99")
    paciente3.setcodPaciente(6);

    let medico = new Medico();
    medico.setNome("Erick");
    medico.setCpf("123.456.789-10");
    medico.setCrm(123456);
    medico.setEspecialidade("Endocrinologista");
    medico.setcodFuncionario(1);

    let medico2 = new Medico();
    medico2.setNome("Julia");
    medico2.setCpf("666.666.666-66");
    medico2.setCrm(666666);
    medico2.setEspecialidade("Cirurgião");
    medico2.setcodFuncionario(2);

    let medico3 = new Medico();
    medico3.setNome("Ryan");
    medico3.setCpf("111.111.111-22");
    medico3.setCrm(111222);
    medico3.setEspecialidade("Ginecologista");
    medico3.setcodFuncionario(3);

    let enfermeiro = new Enfermeiro();
    enfermeiro.setNome("Juliana");
    enfermeiro.setCpf("444.444.444-55");
    enfermeiro.setCoren(12345);
    enfermeiro.setcodFuncionario(1);

    let enfermeiro2 = new Enfermeiro();
    enfermeiro2.setNome("Daniel");
    enfermeiro2.setCpf("987.654.344-21");
    enfermeiro2.setCoren(54321);
    enfermeiro2.setcodFuncionario(2);

    let enfermeiro3 = new Enfermeiro();
    enfermeiro3.setNome("Carlos");
    enfermeiro3.setCpf("654.467.676-21");
    enfermeiro3.setCoren(98765);
    enfermeiro3.setcodFuncionario(3);

    hospital.addPaciente(paciente);
    hospital.addPaciente(paciente2);
    hospital.addPaciente(paciente3);
    hospital.addMedico(medico);
    hospital.addMedico(medico2);
    hospital.addMedico(medico3);
    hospital.addEnfermeiro(enfermeiro);
    hospital.addEnfermeiro(enfermeiro2);
    hospital.addEnfermeiro(enfermeiro3);


    let tbPaciente = document.getElementById("paciente");

    let conteudoP =  "<tr><th>Paciente</th></tr><tr><td>Codigo</td><td>Nome</td><td>CPF</td></tr>";
    hospital.getPaciente().forEach(element =>{
        conteudoP += "<tr> <td>"+element.getcodPaciente()+"</td><td>"+ element.getNome()+"</td><td>"+ element.getCpf()+"</td></tr>";
    });

    tbPaciente.innerHTML = conteudoP;

    
    let tbMedico = document.getElementById("medico");

    let conteudoM =  "<tr><th>Medico</th></tr><tr><td>CRM</td><td>Nome</td><td>Especialidade</td></tr>";
    hospital.getMedico().forEach(element =>{
        conteudoM += "<tr> <td>"+element.getCrm()+"</td><td>"+ element.getNome()+"</td><td>"+ element.getEspecialidade()+"</td></tr>";
    });

    tbMedico.innerHTML = conteudoM;

    let tbEnfermeiro = document.getElementById("enfermeiro");

    let conteudoE =  "<tr><th>Enfermeiro</th></tr><tr><td>COREN</td><td>Nome</td></tr>";
    hospital.getEnfermeiro().forEach(element =>{
        conteudoE += "<tr> <td>"+element.getCoren()+"</td><td>"+ element.getNome()+"</td></tr>";
    });

    tbEnfermeiro.innerHTML = conteudoE;

}