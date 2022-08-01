function Copyright() {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <div className="text-center border-t py-2">
      <p>
        &copy; {year} Agencia de viajes Waytraveltrek. Todos los derechos
        reservados.
      </p>
    </div>
  );
}

export default Copyright;
