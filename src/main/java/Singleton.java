public class Singleton {
    private static volatile Singleton instancia;

    private Singleton() {
        // Constructor privado para evitar instanciación externa
    }

    public static Singleton getInstance() {
        if (instancia == null) {
            synchronized (Singleton.class) {
                if (instancia == null) {
                    instancia = new Singleton();
                }
            }
        }
        return instancia;
    }

    public void ejecutar() {
        System.out.println("Singleton activo: " + this);
    }
}
